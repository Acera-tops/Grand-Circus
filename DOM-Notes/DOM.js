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


// adding and removing from HTML
const newContent = document.createElement("p"); //create new <p> tag
newContent.innerText = "Hello";//add text into the new paragraph
document.body.append(newContent);//adds to end of body

remove()//will remove things from HTML
parent.removeChild(el)//will also remove from HTML

//Events
function clickHandler(event) {
    console.log("Clicked", event);
}
Element.addEventListener("event_type", handlerFunction);//handler function intakes a parameter like a click





