// in this we are going to declare the function in the javascript
function addnumbers (number1,number2){
console.log(number1+number2);
}
const result=addnumbers(1,1)// this is the execution of the file
console.log(`the result is ${result}`)// but the problem is that the value of the result is undefined

// solving the above problem
function addtwonumbers(number3, number4){
             let result1 = (number3+number4)
             return result1
}
let result2 = addtwonumbers(1,1)
console.log(result2);
//----------------------------------------easy way to return the value syntax
function add2numbers(number1,number2){
return number1+number2;



}
 const theresult=add2numbers(1,5)
 console.log(theresult);
//  -------------------------------------------------------------------------------
// the bellow code is for the if else statement and execution of the code 
function userstatus(username){
    if(username== undefined){
console.log("please enter a username")
return
    }
return  `${username} Just logged in`


}
const names = userstatus()
console.log(names)