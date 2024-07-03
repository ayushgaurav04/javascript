console.log("I am the strings")

// the outdated way to write the code in the strings
// const Names = "Ayush"
// var age = 19
// var Dob = "03/06/2004"
// console.log(Names + age+ Dob)
// // new method to write the code of the strings 
// console.log(`My name is ${Names} My age is ${age} and my Dob is ${Dob}`)
// the other way to decleare the srting 
const friend = new String('Ayush');
console.log(friend);
console.log(friend[0])
console.log(friend._proto_)
console.log(friend.toUpperCase())
console.log(friend.charAt(0))// this will give the posistion of the character
console.log(friend.indexOf('A'))// this will tell the index of the chrac of the string
console.log(" i am the substring " )
let newstring = friend.substring(0,5)
console.log(newstring)
let anotherstring = friend.slice(-4,5)
console.log(anotherstring)
// .replace function
let url = "https://ayush_gauaav%04.instagram.com"
console.log (url.replace('%04', '_04'))
console.log(url);
