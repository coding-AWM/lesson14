'use strict'

let body = document.querySelector('body');
let DomElement = function () {
    this.selector;
    this.height;
    this.width;
    this.bg;
    this.fontSize;
}

let create = function (z) {
    let temp = z[0];  
    let temp2 = z.slice(1) 
    let newElem; 
    
    if (temp === '.') {
        newElem = document.createElement('div');
        newElem.setAttribute('class', temp2)   
    } else if (temp === '#') {
        newElem = document.createElement('p');        
        newElem.setAttribute('id', temp2)
    }
    
    body.append(newElem);
    newElem.textContent = prompt('Введите текст','Hello');
    newElem.style.width = '100px';
    newElem.style.height = '100px';
    newElem.style.backgroundColor = 'green';
    newElem.style.fontSize = '25px';
    console.dir(newElem);
}
create('.class');
