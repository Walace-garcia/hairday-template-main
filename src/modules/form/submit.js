import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Date atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data minima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //Recupernado o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }
    //recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecioneum horário disponível");
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um id
    const id = new Date().getTime().toString();

    //Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

    // Recarrega os agendamentos.
    await schedulesDay();
    //Limpa o input de nome do cliente.
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
