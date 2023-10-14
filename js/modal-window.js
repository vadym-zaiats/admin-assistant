'use strict';

export function modalWindow(srcHtml) {
    fetch(`${srcHtml}`)
        .then(async res => await res.text())
        .then(res => document.body.insertAdjacentHTML('beforeend', res))
}