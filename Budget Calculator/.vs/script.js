//looking at entire document to find 'update income' and add a listener for a click to 'update budget' (written up below)
document
    .querySelector('#update_income')
    .addEventListener("click", updateBudget);

document
    .querySelector('#add_expense')
    .addEventListener("click", addExpense);

//declaring variables to use in functions below. calling the Ids from the HTML
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let nameInput = document.querySelector('#name_input');
let expenseList = document.querySelector('#expense_list');
let totalExpenses = document.querySelector('#total_expenses');

let monthlyIncome = 0; //default to 0 until user inputs
let expenses = []; //[] is an empty array
let expenseTotal = 0;
let balance = 0;

function updateBudget(event) { //update Budget is the button we created on the CSS file. Need () in order to call the function
    event.preventDefault(); //prevents the log from flashing. makes it stick
    monthlyIncome = incomeInput.value; //saying that we expect the user to input a value for monthly income
    monthlyBudget.innerText = "$" + monthlyIncome;
    incomeInput.value = ""; //defaults the field to blank
    updateBalance();
}

function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

function addExpense(event) { //other button we created in CSS file. 
    event.preventDefault();
    let expense = {
      expenseName: nameInput.value,
      expenseAmount: amountInput.value
    };
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.expenseName + ": $" + expense.expenseAmount;
    expenseList.appendChild(newExpense);
    expenseAmount = parseInt(amountInput.value);
    expenses.push(expenseAmount);
    nameInput.value = "";
    amountInput.value = "";
    updateExpenseTotal();
  }
  
  function updateExpenseTotal() {
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) { //loop that adds everything up
      expenseTotal += expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
  }
  
