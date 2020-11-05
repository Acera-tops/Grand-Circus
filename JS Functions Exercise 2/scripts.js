(function() {
    // Code goes in here
    let facingForward = true;
    let position = 0;

    function moveForward(distance){
        // increase position by distance
        if (facingForward == true) {
            position = position + distance;
        } else {
            position = position - distance;
        }
    }

    function moveBackward(distance) {
        // decrease position by distance
        if (facingForward == true) {
            position = position - distance;
        } else {
            position = position + distance;
        }
        }   

    function turnAround () {
        // switch value of facingForward
        facingForward = !facingForward //will flip the facing to the opposite
    }

    function printLocation () {
        // give location
        console.log(position);
    }

    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
})();