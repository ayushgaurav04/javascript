// other way to access the code in the object
let mycourses ={
    Course_name: "webdevelopment",
    price: 18000,
    total_amount_paid:10000,
}
let {price}= mycourses// this is the value to acess the code from an object.
console.log(price)
// we can change the price to another name by the follwing syntax
let {price: Dam}= mycourses// this syntax changed the price to Dam.
console.log(Dam)