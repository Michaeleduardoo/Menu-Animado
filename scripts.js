const navBar = document.querySelector(".navBar");
const allLi = document.querySelectorAll("li");
const body = document.getElementById("body");
const cor = document.getElementById("color");
const list = document.querySelectorAll("list");
const indicator = document.querySelector(".indicator");

allLi.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    navBar.querySelector(".active-list").classList.remove("active-list");
    li.classList.add("active-list");

    const indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 110}px))`;

    body.style.backgroundColor = "crimson";
    indicator.style.backgroundColor = "crimson";
    indicator.classList.remove("indicador");
  });
});

cor.addEventListener("click", () => {
  body.style.backgroundColor = "mediumVioletRed";
  indicator.style.backgroundColor = "mediumVioletRed";
  indicator.classList.add("indicador");
});
