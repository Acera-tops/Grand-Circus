// // const car = {
// //     speed: 0,
// //     make: "Ford",
// //     model: "Ranger",
// //     year: 2019,
// //     color: "blue",
// //     vroom() {  //This is a method inside of an object
// //         speed++;
// //     }
// // };

// // console.log(car.speed);
// // car.vroom();
// // console.log(car.speed);


// // const car = {
// //     speed: 0,
// //     make: "Ford",
// //     model: "Ranger",
// //     year: 2019,
// //     color: "blue",
// //     isOn: false,
// //     turnOn() {
// //       this.isOn = true;
// //     },
// //     vroom() {
// //       if (this.isOn) {
// //         this.speed++;
// //       } else{
// //           console.log("Car no on. Car no vroom vroom.")
// //       }
// //     },
// //   };
// //   console.log(car.speed);
// //   car.turnOn();
// //   car.vroom();
// //   console.log(car.speed);



// // Create an Animal with the following properties:

// const animal1 = {
//     name: 'April',
//     Pockets: [],
//     Bells: 200,
//     HomeLoan: 2000,
//     displayName() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// const animal2 = {
//     name: 'Adam',
//     Pockets: [300, 'Hammer', 'Book'],
//     Bells: 300,
//     HomeLoan: 2000
// };


// // Print out the contents of the animal's pockets
// console.log(animal1.Bells);
// console.log(animal2.Bells);


// // Create another animal with completely different properties

// // console.log the name of the animal with the most bells?
// if (animal1.Bells > animal2.Bells) {
//     console.log (`${animal1.name} has more bells.`);
// } else if (animal2.Bells > animal1.Bells) {
//     console.log (`${animal2.name} has more bells.`);
// } else {
//     console.log('No one has more bells.')
// }

// // // BJ's way
// // if (animal.bells > animal1.bells) {
// //     name = animal.name;
// // } else if (animal1.bells > animal.bells) {
// //     name = animal1.name;
// // } else {
// //     name = 'No one';
// // }

// // console.log(`${name} has more bells`);

// // Change name
// // animal.name = "May";
// // console.log(animal);

// // animal.displayName();
// console.log(animal2.Pockets[0]);

// // Add to end of pockets array
// const notebook = 'Leather Notebook';
// const fruit = 'Banana';
// animal1.Pockets.push(notebook);
// console.log(animal1.Pockets);

// // Add to beginning to pockets array
// animal2.Pockets.unshift(notebook);
// console.log(animal2.Pockets);

// // Adds to speficifc position in array 
// // (index, how many to remove, what you're putting in its place)
// animal2.Pockets.splice(2, 0, fruit); //Add fruit to index 2 and remove nothing
// console.log (animal2.Pockets);

// // removes off end
// animal2.Pockets.pop();
// console.log (animal2.Pockets);

// // removes off beginning
// animal1.Pockets.shift();
// console.log(animal1.Pockets);

// // Sort the animals by first name
// const animals1 = animals.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
  
//   console.log(animals1);
// // find the animal with 500 bells
// console.log(
//     animals.find(function(animal) {
//       return animal.bells === 500;
//     })
//   );
  
//   // equals
//   console.log(
//       animals.find(function(animal) {
//         return animal.bells === 500;
//       })
//     );
  
//   // equals
//   let found;
//   for (animal of animals) {
//     if (animal.bells === 500) {
//       found = animal;
//     }
//   }
  
//   // equals
//   for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i];
  
//     if (animal.bells === 500) {
//       found = animal;
//     }
//   }
  
//   console.log(found);


// // REST: 
// // Pretend that console.log only takes in one argument

// // Create a function that taking any amount of arguments,
// // call console.log with each of those arguments?

// // console.log(thing1, thing2, thing3);


// // BJ EXAMPLE
// function consoleAll(...args) {
//   // take in any amount of arguments
//   let response = '';
//   for(arg of args) {
//       response += `${arg} `;
//   }
//   console.log(response);
// }

// const thing1 = 1;
// const thing2 = 2;
// const thing3 = 3;

// consoleAll(thing1, thing2, thing3);
// console.log(thing1, thing2, thing3);





// //   ANOTHER BJ EXAMPLE
// function consoleAll(...args) {
//   // take in any amount of arguments
//   let response = args.reduce((prev, curr) => {
//     return prev + ` ${curr}`;
//   });

//   console.log(response);
// }

// const thing1 = 1;
// const thing2 = 2;
// const thing3 = 3;

// consoleAll(thing1, thing2, thing3);
// console.log(thing1, thing2, thing3);





// //   MY EXAMPLE. ( Doesnt work :( )
// function consoleAll(animal1, animal2, ...otherAnimals) { // take in any amount of arguments
//   const animal1 = "Doc";
//   const animal2 = "Key";
//   const otherAnimals[2] = "George";
//   const otherAnimals[3] = "Spot";
// }
// console.log (animal1, animal2, animal3, animal4);




// // SPREAD: 
// //  basically copy/pastes info from one variable/object to another. 

// const base = { name: "BJ", age: 27 };
// const base1 = { ...base, profession: "Software Developer" };

// console.log(base, base1)


// const devo = { name: "Colors of life", content: "" };
// const devoWithCountry = {...devo, name: "Colours of Life"};

// console.log(devo, devoWithCountry);

// // Kind of like Array.push or unshift but actually creating a new array.
// const animal = {
//   name: "BJ",
//   pockets: [200, 'Hammer', 'Book', { name: "T-rex", type: 'fossil' }],
//   bells: 400,
//   homeLoan: 2000,
//   displayName() {
//     console.log(`Hello! My name is ${this.name}`);
//   },
// };


// console.log(Object.values(animal));

// console.log('POCKETS BEFORE', animal.pockets);

// const notebook = 'Leather Notebook';
// // old way with push and unshift
// // animal.pockets.push(notebook);  // add to end
// // animal.pockets.unshift(notebook);  // add to beginning

// // new way
// const pockets = [animal.pockets, ...notebook] // add to end
// const pockets = [...notebook, animal.pockets] // add to beginning 



// // Another BJ example
// const base = { name: "BJ", age: 27 };
// const base1 = { ...base, name: "Blair", profession: "Software Developer" };

// const {name, age} = base;
// console.log(name);
// console.log(age);






// //CLASSES
// //  Functions that create objects
// class Student {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// }
// const student = new Student ("April", 32)

// // same as saying const student = { name: "BJ", age: 25 }; but less maintainable 

// // Another example
// class Student {
//   constructor(name, age, location) { //only one constructor per class. Starting place for your class where all your data starts. 
//     this.name = name;
//     this.age = age;
//     this.location = location;
//   }
  
//   sayName() {  //Prototype
//       console.log(this.name);
//   }
// }

// const student = new Student("BJ", 25, 'Grand Rapids');
// student.sayMyName = () => {

// }
// // hasOwnProperty
// console.log(student.hasOwnProperty('sayMyName')); // true if it's unique to the object
// console.log(student.hasOwnProperty('sayName')); // true if it's unique to the object

// // SUBCLASS / SUPER / EXTENDS
  // Call a Constructor and add more to it
  class GrandCircusStudent {
    constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
  
      this.skills = ['Programming', 'LinkedIn', 'Zoom'];
    }
    
    sayName() {
        console.log(this.name);
    }
  }
  
  class GrandCircusFEStudent extends GrandCircusStudent {
      constructor(name, age, location) {
          // Call the parent's constructor
          super(name, age, location);
  
          const frontEndSkills = ['HTML', 'CSS', 'JavaScript'];
          this.skills = [this.skills, ...frontEndSkills];

      }
  }
console.log (new GrandCircusFEStudent('April', 32, 'Warren'));


