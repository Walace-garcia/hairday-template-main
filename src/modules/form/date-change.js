import { schedulesDay } from "../schedules/load";

// Seleciona o input da data
const selectedDate = document.getElementById("date");

//Regarrega a lista de horários quando o input de data mudar

selectedDate.onchange = () => schedulesDay();
