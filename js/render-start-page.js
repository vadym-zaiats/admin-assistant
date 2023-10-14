"use strict";
import { getCards } from "./get-cards.js";
import { filters } from "./filters.js";
import { variables } from "./variables.js";

class Modal {
  getToken(email, password) {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          renderAdminPage();
          return response.text();
        } else {
          renderWrongPage();
          console.log("Невірний логін або пароль");
        }
      })
      .then((token) => {
        if (token) {
          localStorage.setItem("user", token);
        }
      });
  }
}

function renderAdminPage() {
  fetch("../html/adminpage.html")
    .then((res) => res.text())
    .then((req) => {
      document.body.innerHTML = req;
      filters();
      document.getElementById("logout-button").addEventListener("click", () => {
        localStorage.clear();
        renderLoginPage();
      });
      getCards();
    });
}

function renderWrongPage() {
  fetch("../html/wrongpage.html")
    .then((res) => res.text())
    .then((req) => {
      document.body.innerHTML = req;
      document.querySelector("#one-more").addEventListener("click", (e) => {
        e.preventDefault();
        renderLoginPage();
      });
      document.querySelector("#no-more").addEventListener("click", (e) => {
        document.body.innerHTML = "Hello world :)";
      });
    });
}

function renderLoginPage() {
  fetch("../html/loginpage.html")
    .then((res) => res.text())
    .then((req) => {
      document.body.innerHTML = req;
      document.querySelector("#loginbutton").addEventListener("click", (e) => {
        e.preventDefault();
        let email = document.querySelector(".login-email");
        let password = document.querySelector(".login-password");
        const loginModal = new Modal();
        loginModal.getToken(email.value, password.value);
      });
    });
  // showCards(variables.cardsList, variables.cards);
}

document.addEventListener("DOMContentLoaded", async function () {
  if (localStorage.getItem("user") === null) {
    //рендер сторінки входу
    renderLoginPage();
  } else {
    // рендер сторінки адміна
    renderAdminPage();
  }
});
