// Exercise 1: Heating and Cooling
    // Define 2 variables
        let actualTemp = 70
        let desiredTemp = 70

    // Write conditionals to tell the heating and cooling system what to do
        if (actualTemp < desiredTemp) {
            console.log("Run Heat");
        } else if (actualTemp > desiredTemp) {
            console.log("Run A/C");
        } else {
            console.log("Standby");
        }



// Exercise 2: Identify longest of 3 names
    // Start with 3 variables (name1, name2, name3) which hold three names
        let name1 = "Anna"
        let name2 = "Lia"
        let name3 = "Bobb"

        console.log (name1.length)
        console.log (name2.length)
        console.log (name3.length)

    // Output "<name> has the longest name". If there is a tie, both names should be listed in the sentence. If all names are the same length, output, "All three names, <name1>, <name2>, and <name3>, are the same length."
        // change names to nameX.length for statements
        if ((name1.length) > ((name2.length) && (name3.length))) {
            console.log (`${name1} has the longest name.`);
        } else if (name2.length > (name1.length && name3.length)) {
            console.log (`${name2} has the longest name.`);
        } else if (name3.length > ((name1.length) && (name2.length))) {
            console.log (`${name3} has the longest name.`);
        } else if ((name1.length == name2.length) && (name1.length == name3.length)) {
            console.log (`All three names, ${name1}, ${name2}, and ${name3} are the same length.`)
        } else if ((name1.length = name2.length) > name3.length) {
            console.log (`${name1} and ${name2} tie for the longest name.`);
        } else if ((name1.length = name3.length) > name2.length) {
            console.log (`${name1} and ${name3} tie for the longest name.`);
        } else { if ((name2.length = name3.length) > name1.length)
            console.log (`${name2} and ${name3} tie for the longest name.`);
        }