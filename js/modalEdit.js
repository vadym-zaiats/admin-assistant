'use strict';

import {variables} from "./variables.js";

export function modalEdit(id) {
    fetch("../html/modal-edit.html")
        .then(async res => await res.text())
        .then(res => {
            document.body.insertAdjacentHTML('beforeend', res);
            variables.cards.forEach(element => {
                if (+element.id === +id) {
                    let selectDoctor = document.querySelector('.doctor-edit');
                    let cardio = document.createElement('option');
                    cardio.innerText = "Кардіолог";
                    let dentist = document.createElement('option');
                    dentist.innerText = "Стоматолог";
                    let therap = document.createElement('option');
                    therap.innerText = "Терапевт";
                    selectDoctor.append(cardio, dentist, therap);
                    let status = document.querySelector('.priority-edit');
                    if (status.value === 'Актуальний'){
                        status.setAttribute('selected', 'true');
                    } else {
                        status.setAttribute('selected', 'true');
                    }
                    document.querySelector('.pacient-name-edit').value = element.name;
                    let priority = document.querySelector('.priority-edit');
                    switch (true) {
                        case (priority.value === 'Звичайна'):
                            priority.setAttribute('selected', 'true');
                            break;
                        case (priority.value === 'Пріоритетна'):
                            priority.setAttribute('selected', 'true');
                            break;
                        case (priority.value === 'Невідкладна'):
                            priority.setAttribute('selected', 'true');
                            break;
                    }
                    document.querySelector('.visit-goal-edit').value = element.goal;
                    document.querySelector('.description-edit').value = element.description;
                    document.querySelector('.btn-save-edits').setAttribute("data-id", `${id}`);
                    if (element.doctor === "Кардіолог") {
                        cardio.setAttribute('selected', 'true');
                        selectDoctor.setAttribute('disabled', 'true');
                        document.querySelector('.pressure-edit').value = element.pressure;
                        document.querySelector('.pressure-edit__div').classList.remove('d-none');
                        document.querySelector('.mass-index-edit').value = element.massIndex;
                        document.querySelector('.mass-index-edit__div').classList.remove('d-none');
                        document.querySelector('.age-edit').value = element.age;
                        document.querySelector('.age-edit__div').classList.remove('d-none');
                        document.querySelector('.diseases-edit').value = element.diseases;
                        document.querySelector('.diseases-edit__div').classList.remove('d-none');
                    }
                    if (element.doctor === "Стоматолог") {
                        dentist.setAttribute('selected', 'true');
                        selectDoctor.setAttribute('disabled', 'true');
                        document.querySelector('.last-visit-edit').setAttribute('value', `${element.lastVisit}`);
                        document.querySelector('.last-visit-edit__div').classList.remove('d-none');
                    }
                    if (element.doctor === "Терапевт") {
                        therap.setAttribute('selected', 'true');
                        selectDoctor.setAttribute('disabled', 'true');
                        document.querySelector('.age-edit').value = element.age;
                        document.querySelector('.age-edit__div').classList.remove('d-none');
                    }
                }
            })
        })
}