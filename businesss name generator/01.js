let rand = Math.random();
console.log(rand);
let adj , shop , lo;
// first letter 
if(rand<0.66){
    adj = "fire"
}
 else if(rand<0.88 && rand>=0.66){
    adj = "amazing"
}
 else {
    adj = "crazy"
}
// the second letter 
if(rand<0.66){
    shop = "Engine"
}
 else if(rand<0.88 && rand>=0.66){
    shop = "foods"
}
 else {
    shop = "garments"
}
// third letter
if(rand<0.66){
    lo = "bros"
}
 else if(rand<0.88 && rand>=0.66){
    lo = "limted"
}
 else {
    lo = "hub"
}
// the output of the result is  

console.log(`Your company name is ${adj } ${shop} ${lo}`)