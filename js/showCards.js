"use strict";

import { createCardHtml } from "./show-card-html.js";

export function showCards(container, arr) {
  if (arr.length > 0) {
    container.innerHTML = "";
    arr.map((el) => {
      createCardHtml(
        container,
        el.id,
        el.doctor,
        el.priority,
        el.visitStatus,
        el.name,
        el.goal,
        el.description
      );
    });
  } else {
    container.innerHTML = "";
    container.innerHTML = "<p>No items have been added</p>";
  }
}
