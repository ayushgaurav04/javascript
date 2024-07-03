const hero1 = ["ayush","gaurav","rahul"]
const hero2 = ["ram", "shyam ","ghanshyam"]
//  hero1.push(hero2);
// console.log(hero1)
// console.log(hero1[3][1]);// this will help to select the array to print with the help of the indexing.
const myhero =  hero1.concat(hero2)// arry ko ek hi line me le ayega 
console.log(myhero)
const myhero2= [...hero1,...hero2]// yeh bhi same karega jo concat karega
console.log(myhero2)
console.log(typeof (myhero))
//................................................another array
let anotherarray = [1,2,3,4, [5,6,7, [8,9,10]]]
console.log(anotherarray)
let anotherarray2 = anotherarray.flat(Infinity)
console.log(anotherarray2)
//----------------------------------------------------------------------------------------
console.log(Array.isArray("ayush"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "ayush"}))// this will give the empty array
//---------------------------------------------------------------------------------------
let another_array2= 100
let another_array3= 200
let another_array4= 300
console.log(Array.of(another_array2,another_array3,another_array4))//Array.of array me convert kar deta hai.