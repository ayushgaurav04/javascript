// in this vodeo we are going to see about the call stack and the executin context in the java script
//  the type of the executin context are the followong-
// 1. Global execution context
// 2. Function execution context
// 3. eval execution context.

// Javascript me code 2 phase me run hota hai sabse phaley memory me sapce allocate hota hai ushke badd wo execute hota hai .


// lets see the example of it.
let val = 4
let otherval= 5
function addnum(num1 ,num2) {
    let sum = num1 + num2
    return sum  
}
let theresult1 =  addnum(val,otherval)
let theresult2 = ` I am the other result`$