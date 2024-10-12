// in this  we are going to learn about the error handling in the javascript in the 
// jab program me koi bhi erroe ata hai toh ushko handle karke humlogh apne data execution process ko continue rakh shakte hai

let a = prompt("please enter the number")// yeh data string me store kar raha hai
let b= prompt("enter the another number ")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not valid")
    // console.log("lora")
}
let sum= parseInt(a)+parseInt(b);// yaha bhi data stirng me hi ayega. use the paresint to conver it into an integer number
// console.log(`the sum is ${sum}`)


// lets see about the 