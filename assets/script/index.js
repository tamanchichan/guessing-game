'use strict';

const restart = document.querySelector('.restart-btn');
const input = document.querySelector('.input-number');
const guessCount = document.querySelector('.guess-count');
const guess = document.querySelector('.guess-btn');
const message = document.querySelector('.message');

let random = Math.floor(Math.random() * 50);

let guesses = 0;
guessCount.innerText = `Guess: ${guesses}`;

guess.addEventListener('click', function() {
  let number = input.value;
  
  if (number == random) {
    message.innerText = 'Congratulations! You guessed the right number.'
  }
  if (number > random) {
    message.innerText = 'The number is lower';
  }
  if (number < random) {
    message.innerText = 'The number is higher';
  }
  guesses++;
  guessCount.innerText = `Guess: ${guesses}`;
  input.value = '';
  input.focus();
})

console.log(random);