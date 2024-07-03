// this lecture is divided into the 2 parts
let score = 2353
console.log(score);
let otherscore= new Number('2353')
console.log(otherscore.toString());
console.log(typeof (otherscore.toString()));
console.log(otherscore.toFixed(1));// to fixed decimal value ko add karta hai. 
let decimalvalue= 123.4569
console.log(decimalvalue.toPrecision(6));
const hundreds = 100000
console.log(hundreds);
console.log(hundreds.toLocaleString('en-IN'))// this will change the nuber to the indian number system
console.log(hundreds.toLocaleString('en-US'))// this will change the nuber to the indian number system.


//========================================================================================
//  LETS TALK ABOUT THE MATHS IN THE JAVA SCRIPT.
console.log(Math);// this is the obejct in the javascript(run this program in the browser cosole section)
console.log(Math.abs(-4))// abs is used to change the negative value to the posistive value but the posistive remains the same 
console.log(Math.round(4.2))// this will round of the nearest value to the given number
console.log(Math.ceil(4.2))// this will give the 5 as output agar 4 se thora bhi jyaada hoga toh wo 4 ka nearest yani ki 5 output dega.
console.log(Math.floor(4.2))// yeh kam value dega matlab ki four hi 
// note that : ceil,floor hai wo round off ka controller hai 

console.log(`I am the controller of the Round of value of the ceil and the floor`)
console.log(`I am the nearest to the 5--> ${Math.ceil(4.2)} and I am the nearest value of the four--> ${Math.floor(4.2)}`)


//----------------------------------------------------------------
//math. random this always gives the random value as the output value

console.log(Math.random())// this will give the different values always
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10+1))

// other mehod 
let max=20
let min= 10
console.log(Math.floor(Math.random()*(max - min +1)+min))

