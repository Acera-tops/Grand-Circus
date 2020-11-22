

function main() {
// Add the "big" class to the "grow-me" paragraph.
    const growMe = document.getElementById("grow-me");
    console.log(growMe); 
    growMe.classList.add("big");


// Remove the "big" class to the "shrink-me" paragraph.
    const shrinkMe = document.getElementById("shrink-me");
    console.log(shrinkMe); 
    shrinkMe.classList.remove("big");


// Find all the <li>s and log their text content to the console.
    const findLi = document.querySelectorAll("li");
    console.log(findLi);
    for (let liItem of findLi) {
        console.log(liItem.innerHTML);
    }


// Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
    const findLink = document.querySelector('.link');
    console.log(findLink);
    findLink.innerHTML = "somewhere";
    findLink.setAttribute("href", "https://www.example.com");



// Set the "display" CSS property of the "hide-me" paragraph to "none"
    const hideMe = document.querySelector('#hide-me');
    hideMe.style.display = "none";


// Set the "display" CSS property of the "show-me" paragraph to "block".
    const showMe = document.querySelector('#show-me');
    showMe.style.display = "block";


// Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Hello Grant!".
    const name = document.getElementById("name").value; //.value gets the value that was entered into the prompt
    console.log(name);
    const welcome = document.querySelector('h1');
    welcome.innerText = "Welcome " + name;
}



