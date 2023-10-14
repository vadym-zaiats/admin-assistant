"use strict";

export function createCardHtml(
  container,
  id,
  doctor,
  priority,
  visitStatus,
  name,
  goal,
  description
) {
  const cardWrapper = document.createElement("li");
  cardWrapper.setAttribute("id", `${id}`);
  cardWrapper.setAttribute(
    "class",
    `card w-50 ${visitStatus === "Завершено" ? "no-active" : ""}`
  );
  cardWrapper.setAttribute("draggable", "true");
  cardWrapper.innerHTML += `<div class="card-body" data-id="${id}">
    <h5 class="card-title doctor-info" data-doc="${doctor}">Лікар: ${doctor}</h5>
    <i class="fa-regular fa-circle-xmark card-remove" data-id="${id}"></i>
    <ul class="list-group list-group-flush">
    <li class="list-group-item priority">Пріоритет: ${priority}</li>
    <li class="list-group-item status">Статус: ${visitStatus}</li>
    <li class="list-group-item">Ім'я пацієнта: ${name}</li>
    <li class="list-group-item">Ціль візиту: ${goal}</li>
    <li class="list-group-item">Опис: ${description}</li>
    </ul>
    <button class="get-info btn btn-primary" data-id="${id}">показати більше</button>
    <button class="edit btn btn-primary" data-id="${id}">редагувати</button>
    </div>`;
  container.append(cardWrapper);
}
