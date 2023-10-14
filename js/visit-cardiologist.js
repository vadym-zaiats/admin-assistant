'use strict';

import {Visit} from "./visit-class.js";
import {modalWindow} from "./modal-window.js";
import {variables} from "./variables.js";



export class VisitCardiologist extends Visit {
    constructor(pacientName, doctor, priority, visitStatus, visitGoal, visitDescription, normalPressure, bodyMassIndex, diseases, age) {
        super(pacientName, doctor, priority, visitStatus, visitGoal, visitDescription)
        this._normalPressure = normalPressure
        this._bodyMassIndex = bodyMassIndex
        this._diseases = diseases
        this._age = age
    }

    postCardiologistVisit() {
        try {
            if (variables.token === null) {
                throw new Error("Для створення картки візиту, будь ласка увійдіть на сайт ввівши свій логін та пароль")
            }
            fetch("https://ajax.test-danit.com/api/v2/cards", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${variables.token}`
                },
                body: JSON.stringify({
                    name: this._pacientName,
                    description: this._visitDescription,
                    doctor: this._doctor,
                    priority: this._priority,
                    visitStatus: this._visitStatus,
                    goal: this._visitGoal,
                    pressure: this._normalPressure,
                    massIndex: this._bodyMassIndex,
                    age: this._age,
                    diseases: this._diseases,
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.status > 300 || response.ok === false) {
                       return  modalWindow("../html/modal-error.html");
                    }
                    variables.cards.push(response);
                    const id = response.id;
                    super.showCard(id, variables.cardsList);
                });
        } catch (err) {
            alert(err.message);
        }
    }

    static showMore(id) {
        variables.cards.forEach(el => {
            if (+el.id === +id) {
                const cardWrapper = document.getElementById(`${id}`);
                const moreInfo = cardWrapper.querySelector('.list-group-flush');
                const li = document.createElement('li');
                li.setAttribute('class', "list-group-item more-info__item");
                li.innerHTML = `<p>Нормальний пульс: ${el.pressure}</p>
                <p>Індекс маси тіла: ${el.massIndex}</p>
                <p>Вік: ${el.age}</p>
                <p>Перенесені захворювання: ${el.diseases}</p>`;
                moreInfo.append(li);
                cardWrapper.querySelector('.get-info').remove();
                const editBtn = cardWrapper.querySelector('.edit');
                const closeMoreBtn = document.createElement('button');
                closeMoreBtn.innerText = 'згорнути інформацію';
                closeMoreBtn.setAttribute('class', 'close-info btn btn-primary');
                closeMoreBtn.setAttribute('data-id', `${id}`);
                closeMoreBtn.style.marginRight = '5px';
                editBtn.before(closeMoreBtn);
            }
        });
    }
    static closeMore(id) {
        variables.cards.forEach(el => {
            if (+el.id === +id) {
                const cardWrapper = document.getElementById(`${id}`);
                cardWrapper.querySelector('.more-info__item').remove();
                cardWrapper.querySelector('.close-info').remove();
                const editBtn = cardWrapper.querySelector('.edit');
                const showMoreBtn = document.createElement('button');
                showMoreBtn.innerText = 'показати більше';
                showMoreBtn.setAttribute('class', 'get-info btn btn-primary');
                showMoreBtn.setAttribute('data-id', `${id}`);
                showMoreBtn.style.marginRight = '5px';
                editBtn.before(showMoreBtn);
            }
        });
    }
    putCardiologistVisit(id){
        fetch("https://ajax.test-danit.com/api/v2/cards/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${variables.token}`
            },
            body: JSON.stringify({
                id: id,
                name: this._pacientName,
                description: this._visitDescription,
                doctor: this._doctor,
                priority: this._priority,
                visitStatus: this._visitStatus,
                goal: this._visitGoal,
                pressure: this._normalPressure,
                massIndex: this._bodyMassIndex,
                age: this._age,
                diseases: this._diseases,
            })
        })
            .then(response => response.json())
            .then(response => {
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
                super.showCard(id, variables.cardsList);
                variables.cards = result;
                variables.cards.push(response);
            })
    }
}