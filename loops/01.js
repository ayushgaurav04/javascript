const prompt = require('prompt-sync')();  // Import prompt-sync

let sum = 0;
let n = prompt("Enter the value of the number: ");
n = Number.parseInt(n);

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`The sum of the first ${n} natural numbers is ${sum}`);
