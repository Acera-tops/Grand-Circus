//add css class and toggle it between numbers and letters
document.querySelector('a').addEventListener('click', function(event) {
    console.log('Clicked');
    event.preventDefault();
})

burger.addEventListener('click', function(event) {
    console.log("Burger Clicked");
    const menu = document.getElementById('menu');
    console.log(menu);
    menu.style.display = "flex";
    // menu.style.border = "10px";   CAN'T STYLE THIS

})

numberLink.addEventListener('click', function(event) {
    console.log("Numbers Clicked");
    const numbers = document.getElementById('numbers');
    console.log(numbers);
    numbers.style.display = "block";
    letters.style.display = "none";
    menu.style.display = "none";

})

letterLink.addEventListener('click', function(event) {
    console.log("Letters Clicked");
    const letters = document.getElementById('letters');
    console.log(letters);
    numbers.style.display = "none";
    letters.style.display = "block";
    menu.style.display = "none";
})
