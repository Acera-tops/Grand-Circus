interface Person{
    firstName: string;
    lastName: string;
};

class Student {
    constructor(public firstName, public lastName){
    }
};

const greeter = (user: Person): string => `Hello ${user.firstName} ${user.lastName}`;

const user: Person = {
    firstName: "Ivan",
    lastName: "Igor",
};

console.log(greeter(user));
// console.log(greeter('1'));
// console.log(greeter());

const users : number[] = [1,2];
