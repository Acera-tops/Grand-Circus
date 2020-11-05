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
        // moveForward(distance *-1) another way to do it with less code
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




// HARD MODE
(function() {
    let facingForward = true;
    let position = 0 N, 0 E;
    let direction = North;

    function moveForward(distance){
        // how do I add direction here?
        if (facingForward == true) {
            position = position + distance;
        } else {
            position = position - distance;
        }
    }

    function moveBackward(distance) {
        // how do I add direction here?
        if (facingForward == true) {
            position = position - distance;
        } else {
            position = position + distance;
        }
        }   

    // function turnAround () {
    //     // switch value of facingForward
    //     facingForward = !facingForward //will flip the facing to the opposite
    // }

    function turnLeft () {
        // change direction 90* to the left
    }

    function turnRight () {
        // change direction 90* to the right
    }


    function printLocation () {
        console.log(position);
    }

    moveForward(5);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    turnRight();
    moveBackward(3);
    printLocation();
})();