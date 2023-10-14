'use strict';

import {createCardHtml} from "./show-card-html.js";
import {showCards} from "./showCards.js";
import {variables} from "./variables.js";
import {modalWindow} from "./modal-window.js";


export class Visit {
    constructor(pacientName, doctor, priority, visitStatus,visitGoal, visitDescription) {
        this._pacientName = pacientName
        this._doctor = doctor
        this._priority = priority
        this._visitStatus = visitStatus
        this._visitGoal = visitGoal
        this._visitDescription = visitDescription
    }

    showCard(id, container) {
        if (variables.cards.length === 1){
            container.innerHTML = '';
        }
        createCardHtml(container, id, this._doctor, this._priority, this._visitStatus,this._pacientName, this._visitGoal, this._visitDescription);
    }

    static removeVisit(id) {
        try {
            fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${variables.token}`
                },
            }).then(response => {
                if (response.status > 300 || response.ok === false) {
                    return modalWindow("../html/modal-error.html");
                }
                let result = [];
                variables.cards.forEach(el => {
                    if (+el.id !== +id){
                        result.push(el);
                    }
                })
                document.getElementById(`${id}`).remove();
                variables.cards = [];
                variables.cards = result;
                if (result.length === 0) {
                    showCards(variables.cardsList, result);
                }
            })
        } catch (err) {
            modalWindow("../html/modal-error.html");
        }
    }
}