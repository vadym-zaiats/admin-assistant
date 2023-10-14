"use strict";

import { showCards } from "./showCards.js";
import { variables } from "./variables.js";

export function getCards() {
  if (localStorage.getItem("user") !== null) {
      variables.token = localStorage.getItem("user");
    fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${variables.token}`,
      },
    })
      .then(async (res) => await res.json())
      .then((res) => {
        if (res.length > 0) {
            variables.cards = [];
          res.forEach((el) => {
              variables.cards.push(el);
          });
        } else {
            variables.cards = [];
        }
        variables.cardsWrap = document.getElementById('cards-wrap');
        variables.cardsWrap.append(variables.cardsList);
        showCards(variables.cardsList, variables.cards);
      });
  }
}
getCards();