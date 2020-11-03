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




 // Area of Circle A = 3.14 * (r*r)
     function getAreaOfCircle (radius){
     const area = 3.14 * (radius * radius);
     return area;
    }
    const area = getAreaOfCircle(4);
    console.log(area);


 // Circumference of Circle
     function getCircumferenceOfCircle(radius) {
         const circumference = 2 * 3.14 * radius;
         return circumference;
    }
    
     const circumference = getCircumferenceOfCircle(20);
     console.log(circumference);


     
// Circumference of Circle with Arrow Function
const getCircumferenceOfACircle = radius => 2 * 3.14 * radius;

 const circumference2 = getCircumferenceOfACircle(20);
 console.log(circumference2);




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
