// when amount and coin is selected and make money is clicked, create coin
//need append in here somewhere
    document.querySelector('.make-money').addEventListener('click', function() {
        const coin = e.target;
        coin.add();
    })

// remove coin when clicked
document.querySelector('.coin').addEventListener('click', function() {
    const coin = e.target;
    coin.remove();
})