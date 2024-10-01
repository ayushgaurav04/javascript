// this is the harry video
console.log("I am working")
let boxes = document.getElementsByClassName("bpx1")// kisi bhi ek element ko target kar shakte hai with the help of the class and idd for the id use the getElementByidname nothing else..
// console.log(boxes)
// boxes[3].style.backgroundColor = "green"

let green_boxes = document.querySelectorAll(".bpx1")
// console.log(green_boxes)
// green_boxes.forEach(e=>{
//     e.style.backgroundColor = "green"
// })
green_boxes.forEach(e=>{
    e.style.backgroundColor = "green"
})