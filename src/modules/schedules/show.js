import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNigth = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    //Limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNigth.innerHTML = "";

    //Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      //Adiciona o id do agendamento.
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      //Cria o ícone de cancelar o agendamento.
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // Adicionar tempo enome no item.
      item.append(time, name, cancelIcon);

      //Obtém somente a hora.
      const hour = dayjs(schedule.when).hour();

      //Renderiza oa agendamento na sessão ( manhã, tarde ou noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNigth.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}
