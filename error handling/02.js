console.log("i am working fine");
// in this we are going to see about the finally tag working in the javascript //---> Notes (jab humlog kisi bhi function me return karete  hai value toh ushke niche ka code execute nahi  hota hai) but jo fianlly tag hai ushko age bhi run kar deta hai bas sharth itna hona chaiye ki wo ek function me wrap ho bas

// start
let main = ()=>{
let a = prompt("Enter the number")
let b = prompt ("Enter the second number")
sum = parseInt(a)+parseInt(b)// integer me convert kar raha hai
let x = 1
try {
    console.log(sum*x)// yeh condition satisfied nahi hai
    return true// fianlly ke bina code ishke agge chalega hi nahi 
    
} catch (error) {
    console.log("Error aa gyaa bhai")
    return false
}
finally{
    console.log("the files are closed and the db is connected ")
}
// console.log("the files are closed and the db is connected ")// check kar ek dekh lo 
}
 main()