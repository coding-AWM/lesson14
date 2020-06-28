'use strict'

let body = document.querySelector('body');

let DomElement = function () {
    this.selector = 0;
    this.height = 0;
    this.width = 0;
    this.bg = 0;
    this.fontSize = 0;
}

DomElement.prototype.create = function () {
    this.selector = prompt('если вам нужно создать класс, то начните писать название класса с точки, если же нужен параграф с id?  то начните писать название id с решетки', '.Hello')
    let temp = this.selector[0];
    let temp2 = this.selector.slice(1)
    let newElem;

    if (temp === '.') {
        newElem = document.createElement('div');
        newElem.setAttribute('class', temp2)
    } else if (temp === '#') {
        newElem = document.createElement('p');
        newElem.setAttribute('id', temp2)
    }

    this.height = prompt('Введите высоту', '100');
    this.width = prompt('Введите ширину', '100');
    this.bg = prompt('Введите цвет фона', 'green');
    this.fontSize = prompt('Введите размер шрифта', '25');

    body.prepend(newElem);
    newElem.style.cssText = `color: red;
    background-color: ${this.bg};
    width: ${this.width}px;
    height: ${this.height}px;
    font-size: ${this.fontSize}px
    `;
    newElem.textContent = prompt('Ведите текст', 'Test Text');
}

let element = new DomElement;
element.create();

// let element2 = new DomElement;
// element2.create();