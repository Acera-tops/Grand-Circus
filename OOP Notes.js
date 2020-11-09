// const car = {
//     speed: 0,
//     make: "Ford",
//     model: "Ranger",
//     year: 2019,
//     color: "blue",
//     vroom() {  //This is a method inside of an object
//         speed++;
//     }
// };

// console.log(car.speed);
// car.vroom();
// console.log(car.speed);


// const car = {
//     speed: 0,
//     make: "Ford",
//     model: "Ranger",
//     year: 2019,
//     color: "blue",
//     isOn: false,
//     turnOn() {
//       this.isOn = true;
//     },
//     vroom() {
//       if (this.isOn) {
//         this.speed++;
//       } else{
//           console.log("Car no on. Car no vroom vroom.")
//       }
//     },
//   };
//   console.log(car.speed);
//   car.turnOn();
//   car.vroom();
//   console.log(car.speed);



// Create an Animal with the following properties:

const animal1 = {
    name: 'April',
    Pockets: [],
    Bells: 200,
    HomeLoan: 2000,
    displayName() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

const animal2 = {
    name: 'Adam',
    Pockets: [300, 'Hammer', 'Book'],
    Bells: 300,
    HomeLoan: 2000
};


// Print out the contents of the animal's pockets
console.log(animal1.Bells);
console.log(animal2.Bells);


// Create another animal with completely different properties

// console.log the name of the animal with the most bells?
if (animal1.Bells > animal2.Bells) {
    console.log (`${animal1.name} has more bells.`);
} else if (animal2.Bells > animal1.Bells) {
    console.log (`${animal2.name} has more bells.`);
} else {
    console.log('No one has more bells.')
}

// // BJ's way
// if (animal.bells > animal1.bells) {
//     name = animal.name;
// } else if (animal1.bells > animal.bells) {
//     name = animal1.name;
// } else {
//     name = 'No one';
// }

// console.log(`${name} has more bells`);

// Change name
// animal.name = "May";
// console.log(animal);

// animal.displayName();
console.log(animal2.Pockets[0]);

// Add to end of pockets array
const notebook = 'Leather Notebook';
const fruit = 'Banana';
animal1.Pockets.push(notebook);
console.log(animal1.Pockets);

// Add to beginning to pockets array
animal2.Pockets.unshift(notebook);
console.log(animal2.Pockets);

// Adds to speficifc position in array 
// (index, how many to remove, what you're putting in its place)
animal2.Pockets.splice(2, 0, fruit); //Add fruit to index 2 and remove nothing
console.log (animal2.Pockets);

// removes off end
animal2.Pockets.pop();
console.log (animal2.Pockets);

// removes off beginning
animal1.Pockets.shift();
console.log(animal1.Pockets);

// Sort the animals by first name
const animals1 = animals.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  
  console.log(animals1);
// find the animal with 500 bells
console.log(
    animals.find(function(animal) {
      return animal.bells === 500;
    })
  );
  
  // equals
  console.log(
      animals.find(function(animal) {
        return animal.bells === 500;
      })
    );
  
  // equals
  let found;
  for (animal of animals) {
    if (animal.bells === 500) {
      found = animal;
    }
  }
  
  // equals
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
  
    if (animal.bells === 500) {
      found = animal;
    }
  }
  
  console.log(found);