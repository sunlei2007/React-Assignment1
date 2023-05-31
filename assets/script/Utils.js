export function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

export function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

export function select(selector, parent = document) {
    return parent.querySelector(selector);
}

export function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

export function print(arg) {
    console.log(arg);
}

export function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function filterArray(array, callback) {
    return array.filter(callback);
}

export function create(element, parent = document) {
    return parent.createElement(element);
}
