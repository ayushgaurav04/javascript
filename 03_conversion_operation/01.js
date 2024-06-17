// this is all about the number conversion fuction 

let score = 44
console.log(typeof(score))// it is a number
// other examples
let score2 = true
console.log(typeof(score2))// it is a string
// now changing the value of the score2 from string to a number
let changevalue = Number(score2)
console.log(typeof(changevalue))// value changed to a number
console.log(changevalue)// agar score 2 me number ke sath koi alphabet ho toh wo not a number output deta hai type to change ho jayega par value me output NaN--> not a number milega 
//  null--> 0
// true , false --> 1,0
