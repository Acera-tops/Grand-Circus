
// Create a class called "BankAccount"
// Properties:
//   ● balance
//   ● interestRate
// Methods:
//   ● addInterest() // increases the balance by adding the appropriate interest
class BankAccount {
 constructor (balance, interestRate) {
     this.balance = balance;
     this.interestRate = interestRate;
 }
 addInterest () {
     this.balance  = this.balance + (this.balance * this.interestRate); //fix this calculation
 }
}
let aprilBankAccnt = new BankAccount(100, .03);

aprilBankAccnt.addInterest(); //calling the method
console.log(aprilBankAccnt);


// Next, create a subclass called "BankAccountWithFee"
// It inherits all the properties and methods from BankAccount and adds the following.
// Properties:
//   ● fee // a fixed dollar amount fee
// Methods:
//   ● applyFee() // subtracts the fee from the balance
class BankAccountWithFee extends BankAccount {
    constructor (balance, interestRate, fee) {
        super (balance, interestRate);
        this.fee = fee;
        
    }
    applyFee () {
        BankAccount -= this.fee;
    }
}
let aprilBankAccntWFee = new BankAccountWithFee (100, .03, 50);
aprilBankAccnt.addInterest() + aprilBankAccntWFee.applyFee();
console.log(aprilBankAccntWFee)
// CANT GET IT TO CALCULATE THE BALANCE - FEE


// Create a few instances (a.k.a. objects) of each class, and test them out by calling the methods.



// class GrandCircusStudent {
//     constructor(name, age, location) {
//       this.name = name;
//       this.age = age;
//       this.location = location;
  
//       this.skills = ['Programming', 'LinkedIn', 'Zoom'];
//     }
    
//     sayName() {
//         console.log(this.name);
//     }
//   }
  
//   class GrandCircusFEStudent extends GrandCircusStudent {
//       constructor(name, age, location) {// Call the parent's constructor
//           super(name, age, location);
  
//           const frontEndSkills = ['HTML', 'CSS', 'JavaScript'];
//           this.skills = [this.skills, ...frontEndSkills];

//       }
//   }
// console.log (new GrandCircusFEStudent('April', 32, 'Warren'));