console.log("this is all aboout the object oreinted programming ")
// let obj = {
//     a:"ayush",
//     b: "gaurav",
// }
// console.log(obj)

// prototype me add karna value ko
let animal = {
    eats: true
};
let work = {
jumps:true
};
// ab mai chata hu ki jo animal hai wo work me eats ka value true as a protype ho jaye ashani she ishke lye hume prototype create karna hoga 
work.__proto__ = animal// this will set the rabit prototype=animal

class animals{
    constructor(name){
        this.name=name;
        console.log("The obeject is created")
    }

    eats(){
        console.log("Kha raha hu")


    }
    jumps(){
        console.log("Kud rahha hu")
    }
}

class lion extends animals{
// roar(){
//     console.log("Mai dhaar raha hu bhai")
// }


}
let a =  new animals("rabbit");
console.log(a)
let b = new animals("shera")
console.log(b)