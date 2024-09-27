// it all about the loops in the javascript
let sum=0;
let n = prompt("Enter the value of the number : ")
n = Number.parseInt(n)
for(let i=1 ; i<n ; i++) {
sum+=(i+1);


}
console.log(`sum of the first ${n} and the natural number is ${sum}`)