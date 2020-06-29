'use strict'

let body = document.querySelector('body');
let selectorS = document.getElementById('selector');
let widthS = document.getElementById('width');
let heightS = document.getElementById('height');
let bgS = document.getElementById('background');
let fontSizeS = document.getElementById('fontSize');
let textS = document.getElementById('text');

let button = document.querySelector('button');

let DomElement = function () {
    this.selector = 0;
    this.height = 0;
    this.width = 0;
    this.bg = 0;
    this.fontSize = 0;
}

DomElement.prototype.start = function () {
    this.selector = selectorS.value;
    this.width = widthS.value;
    this.height = heightS.value;
    this.bg = bgS.value;
    this.fontSize = fontSizeS.value;

    let temp = this.selector[0];
    let temp2 = this.selector.slice(1);
    let newElem;

    if (temp === '.') {
        newElem = document.createElement('div');
        newElem.setAttribute('class', temp2);
    } else if (temp === '#') {
        newElem = document.createElement('p');
        newElem.setAttribute('id', temp2);
    }

    newElem.style.cssText = `color: red;
        background-color: ${this.bg};
        width: ${this.width}px;
        height: ${this.height}px;
        font-size: ${this.fontSize}px
        `;

    newElem.textContent = textS.value;
    body.append(newElem);

}

let element = new DomElement;
button.addEventListener('click', element.start);