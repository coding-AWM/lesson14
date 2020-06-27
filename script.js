'use strict'

let body = document.querySelector('body');

let DomElement = function () {
    this.selector = 0;
    this.height = '100px';
    this.width = '100px';
    this.bg = 'red';
    this.fontSize = '25px';
}

DomElement.prototype.create = function (z) {
    let temp = z[0];  
    let temp2 = z.slice(1) 
    let newElem = this.selector; 
    
    if (temp === '.') {
        newElem = document.createElement('div');
        newElem.setAttribute('class', temp2)   
    } else if (temp === '#') {
        newElem = document.createElement('p');        
        newElem.setAttribute('id', temp2)
    }
    
    body.prepend(newElem);
    newElem.textContent = 'Ghbdtdn';
    newElem.style.width = this.width;
    newElem.style.height = this.height;
    newElem.style.backgroundColor = this.bg;
    newElem.style.fontSize = this.fontSize;
}

let element = new DomElement
element.create(prompt('если вам нужно создать класс, то начните писать название класса с точки, если же нужен параграф с id?  то начните писать название id с решетки','Hello'));

