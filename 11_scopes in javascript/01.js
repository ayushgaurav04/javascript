// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
    
// }
// console.log(a)

function one(){
const username="Ayush"
function two(){
    const id= "ayush04";
    console.log(username)
}
two()
}
one()
// console.log(one)-->// this is will give the functon as an output of the code


// the program using the if statement of the function
if (true){
    const username="Ayush"
if (username=="Ayush"){
    const surname =" Gaurav"
    console.log(username+surname)
}
}
// console.log(addone(5))

function addone(num){
    return num + 1
    
}
console.log(addone(5));



// addTwo(5)
const addTwo = function(num){
    return num + 2
}
addTwo(5)