"use strict";

export function modalCardForm() {
  document.querySelector(".doctor-form").addEventListener("change", () => {
    const obj = {
      pressure: document.querySelector(".pressure-form__div"),
      massIndex: document.querySelector(".mass-index-form__div"),
      age: document.querySelector(".age-form__div"),
      diseases: document.querySelector(".diseases-form__div"),
      lastVisit: document.querySelector(".last-visit-form__div"),
    };
    if (document.querySelector(".doctor-form").value === "Кардіолог") {
      for (const key in obj) {
        if (key !== "lastVisit") {
          obj[key].classList.remove("d-none");
        } else {
          if (!obj[key].classList.contains("d-none")) {
            obj[key].classList.add("d-none");
          }
        }
      }
    }
    if (document.querySelector(".doctor-form").value === "Стоматолог") {
      for (const key in obj) {
        if (key === "lastVisit") {
          obj[key].classList.remove("d-none");
        } else {
          if (!obj[key].classList.contains("d-none")) {
            obj[key].classList.add("d-none");
          }
        }
      }
    }
    if (document.querySelector(".doctor-form").value === "Терапевт") {
      for (const key in obj) {
        if (key === "age") {
          obj[key].classList.remove("d-none");
        } else {
          if (!obj[key].classList.contains("d-none")) {
            obj[key].classList.add("d-none");
          }
        }
      }
    }
    if (document.querySelector(".doctor-form").value === "null") {
      for (const key in obj) {
        if (!obj[key].classList.contains("d-none")) {
          obj[key].classList.add("d-none");
        }
      }
    }
  });
}
