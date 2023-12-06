const jours = document.querySelector(".jours"),
  dates = document.querySelector(".date"),
  icons = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),

    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 

    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 

  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {

    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {

    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  dates.innerText = `${mois[currMonth]} ${currYear}`; 
  jours.innerHTML = liTag;
};
renderCalendar();
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); 
      currMonth = date.getMonth(); 
    } else {
      date = new Date();
    }
    renderCalendar(); 
  });
});
