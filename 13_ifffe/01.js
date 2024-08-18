// this all about the iffe function (imedialtelly invoked function)
(  function chai () {
    console.log(" Db is connected ")
    
})();//----> this is called the iffe function immediately invoked function we need to add the paranthesis() to use it in the main fuction  

//  lets see the example of the arrow function can we apply this iffe in it?

((name) => {  
console.log ( `My name is ${name}`)

}) ('ayush')// this is the way to call the function in the output.

