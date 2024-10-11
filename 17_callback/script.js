console.log("iam ")

const callback = (arg)=>{
    console.log(arg)
}
const loadScript= (src, callback)=>{
let sc =document.createElement ("script")
sc.src =src;
sc.onload = callback("Ayush")
document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css", callback)
// callback isye banate hai taki hhum ushe on demand run kar shake jab man chie tab run kar shke
// jab call back ake andar call back function bahaut share ban jaate hai to callback hell create hota hai jisse kafi jayda problem atti hai to humlogh promicies ka use karte hai 