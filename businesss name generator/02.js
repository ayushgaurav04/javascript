// with using the loops
let rand ;
let adj , shop , lo;
// var v;
for(let i = 1 ; i<=60 ; i++){
   rand = Math.random();
  
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
console.log(`you shop name is ${adj} ${shop} ${lo}`)
} 
