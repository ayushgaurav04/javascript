// in this we are going to learn about the array in the java script
let myArr =[1,2,3,4,5,6,8,9]
console.log(myArr)
let Heros=["hero","shaktiman","krrish","Raone"]
console.log(Heros)
let newarr = new Array(1,2,3)// way to declare the array
console.log(`i am the new array ${newarr}`)
// console.log(myArr.push(5))
myArr.push(5)// push is used to add the value in the array
myArr.pop()// pop is used to rmove the value in the array
myArr.unshift(9)// unshift is used to add the value in the first index of the array 
myArr.shift()// IT will remove the the value from the first index of the array
console.log(myArr.includes(9))// this will check the value in the array that in the array it is present or not. it will give the answer in the form of the boolean data type.
 let joinarr= myArr.join()// join arr ko string me convert kar deta hai

 console.log(joinarr)
 console.log( typeof joinarr)
console.log(myArr)
// the method slice and splice.

// console.log(sparr)
let sparr2=[1,2,3,4,5]
console.log(`I am the original array ${sparr2}`)
let saprr3= sparr2.slice(1,3);
console.log(`I am the slice one ${saprr3}`)
console.log(`changed ${sparr2}`)
let sparr4= sparr2.splice(1,3)
console.log(`i am the splice one ${sparr4}`)
console.log(sparr2)


// note that 
//slice is uded to check the index according to the command and it will remove it from the 

