// in this we are going to learn that how to declare the date in the javascript
let Mydate = new Date()
console.log(Mydate);
console.log(Mydate.toDateString());// this is more readable than the before one.
console.log(Mydate.getFullYear())
console.log(Mydate.toISOString())
console.log(Mydate.toJSON())
console.log(Mydate.toLocaleTimeString())
console.log(Mydate.toLocaleString())// htis is the most readable 

// this is to print the date in the dd-MM-yyyy foremat in the java script
let newdate = new Date("2024-01-30")// this is in the format of the yyyy-mm-dd
console.log(newdate.toLocaleString())

let newdate2 = Date.now()
console.log(newdate2)

console.log(newdate.getTime());
// the most used method to define date in the javascript
console.log (newdate.toLocaleString('default', {
    weekday:"short"

    // we can add the most of the properties here.

}))