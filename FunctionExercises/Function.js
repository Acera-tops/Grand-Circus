// Area of Circle A = 3.14 * (r*r)
function getAreaOfCircle (radius){
    const area = 3.14 * (radius * radius);
    return area;
}

// Circumference of Circle
    const area = getAreaOfCircle(4);
    console.log(area);

    function getCircumferenceOfCircle(radius) {
        const circumference = 2 * 3.14 * radius;
        return circumference;
    }
    
    const circumference = getCircumferenceOfCircle(20);
    console.log(circumference);

// Area of Square A = l * h
function getAreaOfSquare (length,height) {
    const square = length * height;
    return square;
}

const square = getAreaOfSquare(3,5);
console.log(square);

// Area of Triagle A = .5 ( l * h )
function getAreaOfTriangle (length, height) {
    const triangle = 0.5 * (length * height);
    return triangle;
}
const triangle = getAreaOfTriangle(3,5);
console.log(triangle);
