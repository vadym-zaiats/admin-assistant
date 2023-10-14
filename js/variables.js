'use strict';

const cardsContainer = document.createElement('ul');
cardsContainer.setAttribute('class', 'cards-list');

export let variables = {
    token : '',
    cards : [],
    cardsList : cardsContainer,
    cardsWrap : '',
}