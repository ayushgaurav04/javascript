// controlflow
// START
// const score = 150;
// if(score>100){
//     var power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)
//END OF THE CODE


//CODE 2 START
const score =200
// if(score>100)console.log(`User score: ${score}`)//--> the code without the curly braces is called the implicit scope yaha par koi bhi curly barces nahi hai jishke karan humlog ishko implicit scope khate h

 // the bad practice coma laga kar without scope likhna


//  if (score>150)console.log(`the score is ${score}`),console.log(`the score is ${score}`)// bad practice this not a valid code.
    // end


// the other code start point (using the switch statement)
const month = 1
switch(month){
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:// value isme depend karti hai
        console.log("march")
        break;
        
        default:
            console.log("the default vaue is executed ")
            break;
}
