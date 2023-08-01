// test JS connection
// console.log("test");
const expenseList = document.getElementById("expence-list");
// Expenses Array
let expenses = [
  {
    id: 1,
    date: "May 2, 2023",
    item: "orange",
    cost: 2,
  },
  {
    id: 2,
    date: "Jun 18, 2023",
    item: "apple",
    cost: 6,
  },
  {
    id: 3,
    date: "Jun 22, 2023",
    item: "banana",
    cost: 10,
  },
  {
    id: 4,
    date: "Jul 3, 2023",
    item: "mango",
    cost: 8,
  },
];
// createListItem(), create a list item from each expense object
function createListItem(expense) {
  const li = document.createElement("li");
  li.innerHTML = `
  <span class="date">${expense.date}</span>
  <span class="item">${expense.item}</span>
  <span class="cost">$${expense.cost.toFixed(2)}</span>
  `;
  expenseList.appendChild(li);
}

// displayExpenses(), loop through the expense array, for each expense call createListItem()
function displayExpenses() {
  // console.log("display expenses");
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    createListItem(expense);
  });
}
// call displayExpenses() on page laods
window.onload = function () {
  displayExpenses();
};
// SORTING

// Exercise 1: Add a new expense using push()
function addExpense() {
  const newExpense = {
    id: 5,
    date: "Jul 13, 2023",
    item: "kiwi",
    cost: 18,
  };

  expenses.push(newExpense);
}
addExpense();

// Exercise 2: Remove the last expense using pop()
function removeLastExpense() {
  expenses.pop();
}
removeLastExpense();
// Exercise 3: Remove the first expense using shift()
function removeFirstExpense() {
  expenses.shift();
}
removeFirstExpense();
// Exercise 4: Add a new expense at the beginning using unshift()
function newFirstExpense() {
  expenses.unshift({
    id: 6,
    date: "May 13, 2023",
    item: "pineapple",
    cost: 1,
  });
}
newFirstExpense();
// Exercise 5: Remove expenses from a specific index using splice()
function removeSelection() {
  expenses.splice(0, 2);
}
// removeSelection();
// Exercise 6: Make a copy of the original array
originalExpenses = [...expenses];
console.log(originalExpenses);

// Exercise 7: Get a portion of expenses using slice()
function getSelection() {
  expenses = expenses.slice(0, 2);
}
getSelection();
// Exercise 8: Show All
function showAll() {
  expenses = originalExpenses;
}
showAll();

// Exercise 9: Create a new array by mapping expense costs
function findHighestLowest() {
  let costs = expenses.map((expense) => expense.cost);
  let highestCost = Math.max(...costs);
  let lowestCost = Math.min(...costs);
  console.log(costs);
  console.log(highestCost, lowestCost);
}
findHighestLowest();
// Exercise 10: Filter expenses based on a condition
function highCostFilter() {
  expenses = expenses.filter((expense) => expense.cost > 7);
}
// highCostFilter();
// Exercise 11: Calculate the total cost using reduce()
const total = document.getElementById("total");
function displayTotal() {
  let totalCost = expenses.reduce((total, expense) => total + expense.cost, 0);
  // REMOVING TOTAL from 2000
  // let totalCost = expenses.reduce(
  //   (total, expense) => total - expense.cost,
  //   2000
  // );
  total.innerHTML = totalCost.toFixed(2);
}
//[5, 3, 8, 6]
//5+3=8
//8+8=16
//16+6=22
displayTotal();

// Exercise 12: Iterate over expenses using forEach()
function addOneToCost() {
  expenses.forEach((expense) => (expense.cost += 1));
}
addOneToCost();
// Exercise 13: Sort expenses by cost in descending order
function sortDescending() {
  expenses.sort((a, b) => b.cost - a.cost);
}
sortDescending();
//neg, a before b
//pos, b befor a
// Exercise 14: Sort expenses by cost in ascending order
function sortAscending() {
  expenses.sort((a, b) => a.cost - b.cost);
}
sortAscending();
// Exercise 15: Sort alphabetically
function sortAtoZ() {
  expenses.sort((a, b) => a.item.localeCompare(b.item));
}
sortAtoZ();
function sortZtoA() {
  expenses.sort((a, b) => b.item.localeCompare(a.item));
}
sortZtoA();
