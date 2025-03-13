import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data.
const selectDate = document.getElementById("date");

export function schedulesDay() {
  //Obtém a data do input
  const date = selectDate.value;

  //Renderiza as horas disponíveis.

  hoursLoad({ date });
}
