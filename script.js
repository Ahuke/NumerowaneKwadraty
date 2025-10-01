class NumberAdd {
    constructor(selector, startNumber, step) {
        this.btn = document.querySelector(selector);
        this.number = startNumber;
        this.step = step;
        this.btn.addEventListener("click", this.addElement.bind(this));
    }
    addElement() {
        const div = document.createElement('div');
        div.textContent = this.number;
        if (this.number % 5 === 0) div.classList.add('circle');
        this.number += this.step;
        document.body.appendChild(div);
    }
}

const numberAdd = new NumberAdd('button', 1, 1);

/*
const button = document.querySelector('button');
let number = 1;
const addElement = function() {
    if (number >= 1 || number < 1000) {
        const div = document.createElement('div');
        if (number % 5 === 0){
            div.classList.add('circle');
        }
            document.body.appendChild(div);
            div.textContent = number;
            number++;
    }
    else {
        alert("Przekroczono limit 1000 elementów");
    }
}

button.addEventListener("click", addElement) 
*/