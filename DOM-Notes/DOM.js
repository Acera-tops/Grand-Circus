const h1 = document.getElementById('title'); //good for Id's
const title = document.querySelector(`#title`); //good for anything
console.log(h1, title);

const div1 = document.querySelector('div'); //returns first
const divAll = document.querySelectorAll('div');//returns all in array
console.log(div1, divAll);

const divHidden = document.querySelector('div'); //hide first div
divHidden.classList.add('hidden'); //add class to first div
divHidden.classList.remove('hidden'); //remove class from first div
divHidden.classList.toggle('hidden'); //toggle to opposite of current state

console.log(div.classList.contains('number-1')); //isnt working