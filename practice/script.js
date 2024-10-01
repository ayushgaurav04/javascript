console.log("I am working properly")
let box = document.getElementsByClassName("box1")
let bo = document.querySelector("body")
box[0].style.backgroundColor = "Red"
box[1].style.backgroundColor = "Green"
box[2].style.backgroundColor = "Yellow"
box[3].style.backgroundColor = "Orange"
let all_box = document.querySelectorAll(".box1")
all_box.forEach(b=>{
b.addEventListener("click",function(){
// console.log(all_box)
bo.style.backgroundColor = b.style.backgroundColor
})
})
// console.log(box)
