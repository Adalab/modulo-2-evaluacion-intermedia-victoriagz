'use strict';

const inputNumber = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const counter = document.querySelector('.js-counter');
const clue = document.querySelector('.js-clue');

// FUNCION PARA NUMERO ALEATORIO
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }
  const randomNumber = getRandomNumber(100);
  console.log(randomNumber);

//   ====================================================
// ACUMULADOR PARA EL CONTADOR DE CLICKS

  let acumulator = 0;
  const add = () => {
    acumulator = acumulator + 1;
    counter.innerHTML = acumulator;
}

//   FUNCION CONDICIONALES 
function handleInput() {
    const valueNumber = parseInt(inputNumber.value);
    console.log(valueNumber);
    if (isNaN(valueNumber) || valueNumber < 1 ||  valueNumber > 100){
        clue.innerHTML = 'El número debe estar entre el 1 y el 100...'
    } else if (valueNumber > randomNumber){
        clue.innerHTML = 'El número es demasiado alto...'
    } else if (valueNumber < randomNumber){
        clue.innerHTML = 'El número es demasiado bajo...'
    } else {
        clue.innerHTML = 'Has ganado CAMPEONA!!!!!'
    }

    add();
}


button.addEventListener('click', handleInput);
