// more about the functions

// method 1
function cart_price(num1){
return num1
}
console.log(cart_price(100))
//----------------------------------------------------------------
//method 2
function cart_price1(...num2){// ... array me convert kar dega sare passed value jo ki user enter karega
 return num2
}
console.log(cart_price1(200,300,400))
//----------------------------------------------------------------
//method 3
function cart_price3(val1,val2, ...num3){
return num3
}
console.log(cart_price3(200,300,400,500))
// console.log(cart_price)

// in this jo value hai 200,300 wo ja kar val1,val2 me store ho gyi hai
// and jo 400, 500 wo ...num3 ek array me jaa kar store ho gyi hai
//----------------------------------------------------------------
//method 4

let oj1={
    name:"Ayush",
    Price:199
}
let value=Object.values(oj1)
console.log(value)


function details(anyobject){
    console.log(`The username is ${anyobject.name} and the book price is ${anyobject.Price}`)

}
details(oj1)// passed the value in the obj1 to take the user name and the price from the object oj1.
//----------------this is to update the value in the function details
details({
    name: "gaurav",
    Price: 200
})
//--------------------------------
//method 5
let newarray= [200,300,400]
function secondvalue(value2){
    return value2[1]
}
console.log(secondvalue(newarray))