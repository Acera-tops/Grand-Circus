// (function() {
//     // Code goes in here
//     let facingForward = true;
//     let position = 0;

//     function moveForward(distance){
//         // increase position by distance
//         if (facingForward == true) {
//             position = position + distance;
//         } else {
//             position = position - distance;
//         }
//     }

//     function moveBackward(distance) {
//         // decrease position by distance
//         // moveForward(distance *-1) another way to do it with less code
//         if (facingForward == true) {
//             position = position - distance;
//         } else {
//             position = position + distance;
//         }
//         }   

//     function turnAround () {
//         // switch value of facingForward
//         facingForward = !facingForward //will flip the facing to the opposite
//     }

//     function printLocation () {
//         // give location
//         console.log(position);
//     }

//     moveForward(5);
//     moveBackward(3);
//     printLocation();
//     turnAround();
//     moveForward(10);
//     moveBackward(5);
//     printLocation();
// })();






// HARD MODE
(function() {
    let facingNorth = true;
    let facingEast = false;
    let positionNorth = 0;
    let positionEast = 0;
    printLocation();

    function moveForward(distance){
        if (facingNorth == true) {
            positionNorth = positionNorth + distance;
        } else if (facingEast == true) {
            positionEast = positionEast + distance;
        } else {
            positionEast = positionEast - distance;
        }
    }

    function moveBackward(distance) {
        if (facingNorth == true) {
            positionNorth = positionNorth - distance;
        } else if (facingEast == true) {
            positionEast = positionEast - distance;
        } else {
            positionEast = positionEast + distance;
        }
    }   

    function turnLeft () { //HAVING PROBLEMS HERE. LOOKS LIKE IM FACING NORTH 2X WITH THE LOGS
        // change direction 90* to the left
        if (facingNorth == true) {
            facingNorth == false;
            facingEast == false;
            let facingWest = true;
            console.log("Facing West");
        } else if (facingEast == true); {
            facingEast = false;
            facingNorth = true;
            facingWest = false;
            console.log("Facing North");
        // } else(facingWest == true); {
        //     facingEast = false;
        //     facingNorth = false;
        //     facingWest = false;
        //     console.log("Facing South");
        }
    }

    function turnRight () {
        // change direction 90* to the right
        if (facingNorth == true) {
            facingNorth = !facingNorth;
            facingEast == true;
        } else (facingEast == true); {
            facingEast = !facingEast;
            facingNorth == false;
        }
    }


    function printLocation () {
        console.log(positionNorth + "N", positionEast + "E");
    }

    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    printLocation();
    turnRight();
    moveBackward(3);
    printLocation();

})();