'use strict';

export function closedModal() {
    const modalError = document.querySelector('.modal-window');
    const modalBackground = document.querySelector('.modal-background');
    modalError.remove();
    modalBackground.remove()
}