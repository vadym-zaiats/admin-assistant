"use strict";

import {closedModal} from "./closed-modal.js";
import {Visit} from "./visit-class.js";
import {VisitCardiologist} from "./visit-cardiologist.js";
import {VisitTherapist} from "./visit-therapist.js";
import {VisitDentist} from "./visit-dentist.js";
import {modalEdit} from "./modalEdit.js";
import {modalCardForm} from "./modalCardForm.js";
import {modalWindow} from "./modal-window.js";

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-close-modal")) {
        closedModal();
    }
    if (e.target.classList.contains("card-remove")) {
        const id = e.target.getAttribute("data-id");
        Visit.removeVisit(id);
    }
    if (e.target.classList.contains('visit-create')){
        modalWindow("../html/modal-card-form.html");
    }
    if (e.target.classList.contains('doctor-form')) {
        modalCardForm();
    }
    if (e.target.classList.contains("btn-save-card")) {
        const doctor = document.querySelector(".doctor-form").value;
        const pacientName = document.querySelector(".pacient-name-form").value;
        const priority = document.querySelector(".priority-form").value;
        const visitStatus = document.querySelector(".status-form").value;
        const visitGoal = document.querySelector(".visit-goal-form").value;
        const visitDescription = document.querySelector(".description-form").value;
        if (doctor === "Кардіолог") {
            const normalPressure = document.querySelector(".pressure-form").value;
            const bodyMassIndex = document.querySelector(".mass-index-form").value;
            const diseases = document.querySelector(".diseases-form").value;
            const age = document.querySelector(".age-form").value;
            const card = new VisitCardiologist(
                pacientName,
                doctor,
                priority,
                visitStatus,
                visitGoal,
                visitDescription,
                normalPressure,
                bodyMassIndex,
                diseases,
                age
            );
            card.postCardiologistVisit();
            closedModal();
        }
        if (doctor === "Стоматолог") {
            const lastVisitDate = document.querySelector(".last-visit-form").value;
            const card = new VisitDentist(
                pacientName,
                doctor,
                priority,
                visitStatus,
                visitGoal,
                visitDescription,
                lastVisitDate
            );
            card.postDentistVisit();
            closedModal();
        }
        if (doctor === "Терапевт") {
            const age = document.querySelector(".age-form").value;
            const card = new VisitTherapist(
                pacientName,
                doctor,
                priority,
                visitStatus,
                visitGoal,
                visitDescription,
                age
            );
            card.postTherapistVisit();
            closedModal();
        }
    }
    if (e.target.classList.contains("get-info")) {
        const id = e.target.getAttribute("data-id");
        const card = document.getElementById(`${id}`);
        const doctor = card.querySelector(".doctor-info").getAttribute("data-doc");
        if (doctor === "Кардіолог") {
            VisitCardiologist.showMore(id);
        }
        if (doctor === "Стоматолог") {
            VisitDentist.showMore(id);
        }
        if (doctor === "Терапевт") {
            VisitTherapist.showMore(id);
        }
    }
    if (e.target.classList.contains("close-info")) {
        const id = e.target.getAttribute("data-id");
        const card = document.getElementById(`${id}`);
        const doctor = card.querySelector(".doctor-info").getAttribute("data-doc");
        if (doctor === "Кардіолог") {
            VisitCardiologist.closeMore(id);
        }
        if (doctor === "Стоматолог") {
            VisitDentist.closeMore(id);
        }
        if (doctor === "Терапевт") {
            VisitTherapist.closeMore(id);
        }
    }
    if (e.target.classList.contains("edit")) {
        const id = e.target.getAttribute("data-id");
        modalEdit(id);
    }
    if (e.target.classList.contains("btn-save-edits")) {
        const id = e.target.getAttribute("data-id");
        const doctor = document.querySelector(".doctor-edit").value;
        const pacientName = document.querySelector(".pacient-name-edit").value;
        const priority = document.querySelector(".priority-edit").value;
        const visitStatus = document.querySelector(".status-edit").value;
        const visitGoal = document.querySelector(".visit-goal-edit").value;
        const visitDescription = document.querySelector(".description-edit").value;
        if (doctor === "Кардіолог") {
            const normalPressure = document.querySelector(".pressure-edit").value;
            const bodyMassIndex = document.querySelector(".mass-index-edit").value;
            const diseases = document.querySelector(".diseases-edit").value;
            const age = document.querySelector(".age-edit").value;
            const card = new VisitCardiologist(
                pacientName,
                doctor,
                priority,
                visitStatus,
                visitGoal,
                visitDescription,
                normalPressure,
                bodyMassIndex,
                diseases,
                age
            );
            card.putCardiologistVisit(id);
        }
        if (doctor === "Стоматолог") {
            const lastVisitDate = document.querySelector(".last-visit-edit").value;
            const card = new VisitDentist(
                pacientName,
                doctor,
                priority,
                visitStatus,
                visitGoal,
                visitDescription,
                lastVisitDate
            );
            card.putDentistVisit(id);
        }
        if (doctor === "Терапевт") {
            const age = document.querySelector(".age-edit").value;
            const card = new VisitTherapist(
                pacientName,
                doctor,
                priority,
                visitStatus,
                visitGoal,
                visitDescription,
                age
            );
            card.putTherapistVisit(id);
        }
        closedModal();
    }
});