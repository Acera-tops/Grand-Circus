// CalculateBill (functions start with verbs)

    // 1- Create/Define funciton
    function calculateBill() {  //Parameters
        // Body of the Function
        console.log('Running Calculate Bill!');
        const total = 100 *1.06;
        console.log(total); 
        return total; //allows us to call the total outside the function
    }

    // 2- Call function
    const myTotal = calculateBill();  //Arguments

    console.log(`Your total is ${myTotal}`);


// Area of Rectangle A = l * w
    // l=10, w=5

    function areaOfRectangle (width,length) {
        const area = width * length;
        console.log(area);
        return area;
    }

    const area = areaOfRectangle(5, 10);
    console.log(`The rectangle's area is ${area}`);

// Area of Circle A = 3.14 * (r*r)
function getAreaOfCircle (radius){
    const areaCircle = 3.14 * (radius * radius);
    return areaCircle;
}

    const areaCircle = getAreaOfCircle(4);
    console.log(areaCircle);
 
