// in this we are going to learn about the objects in the javascript
let sy = Symbol("key1")

let User ={
    name: 'John',
    Roll_no : 1,
    [sy]:"gaurav",// this is the way to write the symbols(u need to decelare the symbols at first then it will only work)
    class: "A-2",
    Email: "john@example.com"

}
console.log(typeof(User));
let print =(User.name)
console.log(User)
console.log(User.name)// . method to acces the name in the object
console.log(User["name"])// this is the correct way call the name from the object
console.log(`My name is - ${print}`)
console.log(User[sy])// symbol access karne ke liye "" nahi lagte hai
console.log(`My type is the-->${typeof(sy)}`)
//--------------------------------------to decleare the function in the java script
let greet= function(){
    console.log(`You are invited to may party ${this.name}`)
}
console.log(greet)
User.greeting = function(){
    console.log(`You are invited to the party ${this.name}`);
}
console.log(User.greeting())
console.log(typeof(greet))
