"use strict";
;
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
;
const greeter = (user) => `Hello ${user.firstName} ${user.lastName}`;
const user = {
    firstName: "Ivan",
    lastName: "Igor",
};
console.log(greeter(user));
// console.log(greeter('1'));
// console.log(greeter());
const users = [1, 2];
