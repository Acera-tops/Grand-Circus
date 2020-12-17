// when amount and coin is selected and make money is clicked, create coin
//need append in here somewhere
    let form = document.querySelector('#make-money').addEventListener('submit', function(event) {
        event.preventDefault();
        let howMany = document.getElementById("how-many").value;
        console.log(howMany);

        let whichCoin = document.getElementById("which-coin").value;
        console.log(whichCoin);

        //get coin container from DOM then loop through number of coin and append classes to the dom.

        // const coin = e.target;
        // coin.add();
    })

// remove coin when clicked
// document.querySelector('.coin').addEventListener('click', function() {
//     const coin = e.target;
//     coin.remove();
// })

