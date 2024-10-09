console.log("iam ")

const callback = (arg, fn)=>{
    console.log(arg)
}
const loadScript= (src, callback)=>{
let sc =document.createElement ("script")
sc.src =src;
sc.onload = callback("Ayush")
document.head.append(sc)
}
loadScript("https//ajax.googleapis.com/ajax", callback)