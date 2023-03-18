let element = document.querySelector('.value');

// let num = element.textContent ;

let number = parseInt(element.textContent);


function decrement() {
    number = number - 1;
    element.textContent = number;
}

function increment() {
    number = number + 1 ;
    element.innerText = number;
}

