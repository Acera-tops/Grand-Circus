
// Create an array of 3 characters. 
    // Each character is an object with two properties--name and health. 
// Create an object outside the array in a variable called opponent. 
    // The opponent also has name and health properties.
        // the opponent should start with more health than any of the characters.

const characters = [
    {
    name: 'Dude',
    health: 50
    },

    {
    name: 'Punk',
    health: 50
    },

    {
    name: 'Hooligan',
    health: 50
    },
]

const opponent = {
    name: 'Evil Villian',
    health: 100
};

// Create a loop that:
//  ● Prints out the name and health of all three characters plus the opponent.
//  ● Prompts the user to pick a character by number (1, 2, or 3).
//  ● “Battles” the selected character against the opponent. Remove five health from both
//    the character and the opponent. (Or you can remove a random number from each.)
//  ● Exit the loop when the user response is null, which means that the cancel button was
//    clicked

console.log(characters,opponent);
let chooseCharacter
do {
    for (let i = 0 ; i < characters.length ; i++) {
        if (characters[i].health <= 0 ) {
            let deadCharacter = characters.splice(i);
            console.log (deadCharacter);
        }
    console.log(characters);

    }
    chooseCharacter = prompt ("Would you like to play character 1, 2, or 3?");
    let choosenCharacter = characters[chooseCharacter - 1];
    choosenCharacter.health -= (Math.floor(Math.random() * 50));
    opponent.health -= (Math.floor(Math.random() * 50));
    console.log(opponent.name, opponent.health, choosenCharacter.name, choosenCharacter.health);


    // if (chooseCharacter == "1") {
    //     characters[0].health -= (Math.floor(Math.random() * 50));
    //     console.log(characters[0].name, characters[0].health);
    //     opponent.health -= (Math.floor(Math.random() * 50));
    //     console.log(opponent.name, opponent.health);
    // } else if (chooseCharacter == "2") {
    //     characters[1].health -= (Math.floor(Math.random() * 50));
    //     console.log(characters[1].name, characters[1].health);
    //     opponent.health -= (Math.floor(Math.random() * 50));
    //     console.log(opponent.name, opponent.health);
    // } else if (chooseCharacter == "3") {
    //     characters[1].health -= (Math.floor(Math.random() * 50));
    //     console.log(characters[2].name, characters[2].health);
    //     opponent.health -= (Math.floor(Math.random() * 50));
    //     console.log(opponent.name, opponent.health);
//  };

} while (chooseCharacter != null)

console.log(characters, opponent)
