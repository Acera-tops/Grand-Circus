/**
 * Animal Crossing Practice
 */
// Create an Animal with the following properties:
// Name: BJ
// Pockets: []
// Bells: 200
// HomeLoan: 2000

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
// animal.pockets.push(notebook);  // add to end
// animal.pockets.unshift(notebook);  // add to beginning

// // const pockets = [animal.pockets, ...notebook] // add to end with Rest
// // const pockets = [...notebook, animal.pockets] // add to beginning with Spread


// // (index, how many to remove (can be 0), what you're putting in its place)
// animal.pockets.splice(2, 0, notebook); // Add notebook to index 2, removing nothing
// animal.pockets.splice(4, 1, notebook); // Add notebook to index 4, removing remove one thing starting at index 4
// animal.pockets.splice(4, 2, notebook); // Add notebook to index 4, removing remove one thing starting at index 4

// const {pockets } = animal;

// console.log('POCKETS AFTER', animal.pockets);

// // const item = animal.pockets.pop(); // take of the end, returns what it removed
// // const item = animal.pockets.shift(); // take of the start, returns what it removed
// // animal.pockets.splice(3, 1); // Remove 1 item, starting at index 3.
// // NOTE: in splice, the third arg is optional :)

// // console.log(item);
// console.log('POCKETS AFTER', animal.pockets);

// return;

// // Print out the contents of the animal's bells
// console.log(animal.bells);




// // Create another animal with completely different properties
// const animal1 = {
//   name: "Tiia",
//   pockets: [],
//   bells: 300,
//   homeLoan: 2000,
// };
// console.log(animal1.bells);

// let name;

// // console.log the name of the animal with the most bells?
// if (animal.bells > animal1.bells) {
//   name = animal.name;
// } else if (animal1.bells > animal.bells) {
//   name = animal1.name;
// } else {
//   name = "No one";
// }

// console.log(`${name} has more bells`);



// // Change BJ's name to Bradley
// animal.name = "Bradley";
// console.log(animal);

// animal.displayName();




// CAR SHIT
// const car = {
//   speed: 0,
//   make: "Ford",
//   model: "Ranger",
//   year: 2019,
//   color: "blue",
//   isOn: false,
//   turnOn() {
//     this.isOn = true;
//   },
//   vroom() {
//     if (this.isOn) {
//       this.speed++;
//     } else{
//         console.log("Car no on. Car no vroom vroom.")
//     }
//   },
// };

// console.log(car.speed);
// car.turnOn();
// car.vroom();
// console.log(car.speed);







//  THIS IS ALL A CONFUSING MESS BELOW. cAN FIX AS A WAY TO STUDY.
// /**
//  * Bells (money) are numbers, everything else is a string
//  */
// // character is an object where you can store variables within variables
// // pockets is an array. can use .length to see how many objects are in an array
// const character = {
//     name: "BJ",
//     pockets: [
//       200,
//       "wood",
//       "brick",
//       "ice cream truck",
//       "journal",
//       "axe",
//       "shovel",
//       "wood",
//     ],
//   };
  
//   const houseLoan = 2000;
  
//   /**
//    * Conditionals
//    * --------------------------
//    */
//   /**
//    * Check to see if I am able to add to my pockets
//    */
//   const maxPocketSize = 10;
//   console.log(character.pockets.length);
  
// // if, else version
//   if (character.pockets.length < 10) {
//     console.log("We have room in our pockets!");
//   } else {
//     console.log("We have no room in our pockets!");
//   }
  
// // ternary version of code
//   const message = `We have ${
//     character.pockets.length <= 10 ? "" : "no"
//   } room in our pockets`;
//   console.log(message);
  
//   /**
//    * Add to pockets
//    */
//   character.pockets.push(3000, "tree");
  
//   console.log(character.pockets);
//   if (character.pockets.length < 10) {
//     console.log("We have room in our pockets!");
//   } else {
//     console.log("We have no room in our pockets!");
//   }
  
//   /**
//    * Am I able to pay off my house?
//    */
//   let totalBells = 0;
  
//   for (const item of character.pockets) {
//     if (typeof item === "number") {
//       totalBells += item;
//     }
//   }
  
//   if (totalBells >= houseLoan) {
//     console.log("We can pay off our house.");
//   } else {
//     console.log("We are stuck in debt forever.");
//   }
//   console.log(totalBells);
  
//   /**
//    * Loops:
//    * -------------------------
//    */
//   /**
//    * Calculate the total amount of bells in
//    *
//    */
  
// /**
//  * How much wood is in in your pockets?
//  */
// // counter, starts at 0
// let counter = 0;

// // loop through the pockets
// for (let item of character.pockets) {
//   // if the item is wood, increase counter by 1
//   if (item === "wood") {
//     counter++;
//   }
// }

// // print out our counter
// console.log("Pieces of wood: ", counter);

//   /**
//    * How many tools are in your pockets?
//    */
//   let tools = 0;

//   // loop through the pockets
// for (let item of character.pockets) {
//     // if it's a tool, increase the counter
//     // Types of tools: axe, shovel, slingshot
//     if (item === 'axe' || item === 'shovel' || item === 'slingshot') {
//         tools++;
//     }
// }
// console.log("Tools:", tools)
  
//   /**
//    * Add as many pieces of wood to your pocket as you can
//    */
//   maxPocketSize = 30;

// // while pockets length is less than maxPocketSize
// while (character.pockets.length < maxPocketSize) {
//   // Add wood to the array
//   character.pockets.push("wood");
// }
// console.log(character.pockets);
// console.log(character.pockets.length);


//CLASSES
class Villager {
  constructor (name, birthday, species, gender, catchphrase) {//every class is going to have a constructor to set up or initialize the data
    this.name = name;//setting the name to the object
    this.birthday = birthday;
    this.species = species;
    this.gender = gender;
    this.catchphrase = catchphrase;
    this.isNPC = true;
  }
  sayCatchPhrase () {
    console.log(this.catchphrase);
  }
}
const villager1 = new Villager ('April', new Date("04/16/1988"), 'halfling', 'female', 'Well, Actually...');
console.log(villager1);
villager1.sayCatchPhrase();

// extends this class to create a MainCharacter class
class MainCharacter extends Villager {
  constructor(name, birthday, species, gender, catchphrase) {
    super (name, birthday, species, gender, catchphrase);
    this.isNPC = false;
    this.pockets = [];
    this.maxPockets = 5;
  }
  canAddToPockets() {
    return(this.pockets.length <= this.maxPockets);
  }
}
const mainCharacter = new MainCharacter('Bob'); 
console.log(mainCharacter);
console.log(mainCharacter.canAddToPockets());
mainCharacter.pockets = [1, 2, 3, 4, 5];
console.log(mainCharacter.canAddToPockets());


//Add characters to new array, island
const island = [];

island.push(mainCharacter);
island.push(villager1);
island.push(new Villager('Saguna', new Date(), 'human', 'female', 'Not Really'));
console.log(island);

//remove a character

const removed = island.shift();
console.log(island);
console.log(removed);

//have each villager say "hi my name is ${name}"
for (villager of island) {
  console.log(`Hi, my name is ${villager.name}`);
  villager.sayCatchPhrase();
}

// //another way to do it
// island.forEach(function(v) {
//   sayHello(v);
// })

// //another way to do it
// for (let i = 0; i < island.length; i++) {
//    const villager = island[i];
//    sayHello(villager);
// }

// //another way to do it
// function sayHello(villager) {
//    console.log(`Hi! My name is ${villager.name}.`);
//    villager.sayCatchPhrase();
// }









