"use strict";

export function filters() {
  document.getElementById("status").addEventListener("change", (e) => {
    if (e.target.value == 1) {
      // показати тільки актуальні
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
        if (!elem.querySelector(".status").textContent.includes("Актуальний")) {
          elem.classList.add("d-none");
        }
      });
    }
    if (e.target.value == 2) {
      // показати тільки завершені
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
        if (!elem.querySelector(".status").textContent.includes("Завершено")) {
          elem.classList.add("d-none");
        }
      });
    }
    if (e.target.value == 4) {
      // показати усі
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
      });
    }
  });
  document.getElementById("priority").addEventListener("change", (e) => {
    if (e.target.value == 4) {
      // показати усі
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
        // if (!elem.querySelector(".priority").textContent.includes("Низький")) {
        //   elem.classList.add("d-none");
        // }
      });
    }
    if (e.target.value == 3) {
      // показати тільки низький
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
        if (!elem.querySelector(".priority").textContent.includes("Низький")) {
          elem.classList.add("d-none");
        }
      });
    }
    if (e.target.value == 2) {
      // показати тільки середній
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
        if (
          !elem.querySelector(".priority").textContent.includes("Нормальний")
        ) {
          elem.classList.add("d-none");
        }
      });
    }
    if (e.target.value == 1) {
      // показати тільки високий
      document.querySelectorAll(".w-50").forEach((elem) => {
        elem.classList.remove("d-none");
        if (!elem.querySelector(".priority").textContent.includes("Високий")) {
          elem.classList.add("d-none");
        }
      });
    }
  });
  // пошук по ключовому слову
  document.getElementById("search").addEventListener("click", (e) => {
    e.preventDefault();
    let searchWord = document.querySelector(".search-box").value;
    if (searchWord) {
      document.querySelectorAll(".w-50").forEach((e) => {
        e.classList.add("d-none");
      });
      document.querySelectorAll(".w-50").forEach((e) => {
        if (e.innerHTML.indexOf(searchWord) !== -1) {
          e.classList.remove("d-none");
        }
      });
    } else {
      document.querySelectorAll(".w-50").forEach((e) => {
        e.classList.remove("d-none");
      });
    }
  });
}
