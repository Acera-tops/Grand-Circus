/**
 * Animal Crossing Practice
 */

/**
 * Bells (money) are numbers, everything else is a string
 */
// character is an object where you can store variables within variables
// pockets is an array. can use .length to see how many objects are in an array
const character = {
    name: "BJ",
    pockets: [
      200,
      "wood",
      "brick",
      "ice cream truck",
      "journal",
      "axe",
      "shovel",
      "wood",
    ],
  };
  
  const houseLoan = 2000;
  
  /**
   * Conditionals
   * --------------------------
   */
  /**
   * Check to see if I am able to add to my pockets
   */
  const maxPocketSize = 10;
  console.log(character.pockets.length);
  
// if, else version
  if (character.pockets.length < 10) {
    console.log("We have room in our pockets!");
  } else {
    console.log("We have no room in our pockets!");
  }
  
// ternary version of code
  const message = `We have ${
    character.pockets.length <= 10 ? "" : "no"
  } room in our pockets`;
  console.log(message);
  
  /**
   * Add to pockets
   */
  character.pockets.push(3000, "tree");
  
  console.log(character.pockets);
  if (character.pockets.length < 10) {
    console.log("We have room in our pockets!");
  } else {
    console.log("We have no room in our pockets!");
  }
  
  /**
   * Am I able to pay off my house?
   */
  let totalBells = 0;
  
  for (const item of character.pockets) {
    if (typeof item === "number") {
      totalBells += item;
    }
  }
  
  if (totalBells >= houseLoan) {
    console.log("We can pay off our house.");
  } else {
    console.log("We are stuck in debt forever.");
  }
  console.log(totalBells);
  
  /**
   * Loops:
   * -------------------------
   */
  /**
   * Calculate the total amount of bells in
   *
   */
  
/**
 * How much wood is in in your pockets?
 */
// counter, starts at 0
let counter = 0;

// loop through the pockets
for (let item of character.pockets) {
  // if the item is wood, increase counter by 1
  if (item === "wood") {
    counter++;
  }
}

// print out our counter
console.log("Pieces of wood: ", counter);

  /**
   * How many tools are in your pockets?
   */
  let tools = 0;

  // loop through the pockets
for (let item of character.pockets) {
    // if it's a tool, increase the counter
    // Types of tools: axe, shovel, slingshot
    if (item === 'axe' || item === 'shovel' || item === 'slingshot') {
        tools++;
    }
}
console.log("Tools:", tools)
  
  /**
   * Add as many pieces of wood to your pocket as you can
   */
  maxPocketSize = 30;

// while pockets length is less than maxPocketSize
while (character.pockets.length < maxPocketSize) {
  // Add wood to the array
  character.pockets.push("wood");
}
console.log(character.pockets);
console.log(character.pockets.length);








