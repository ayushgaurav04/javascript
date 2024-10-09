console.log("I am working properly");

const text = document.querySelector(".text");
const container = document.querySelector(".container");
const main = document.querySelector(".main");

text.addEventListener("click", (t) => {
    // t.stopPropagation();
    alert("text was clicked");
});

container.addEventListener("click", (v) => {
    // t.stopPropagation();
    alert("container was clicked");
});

main.addEventListener("click", (x) => {
    // t.stopPropagation();
    alert("main was clicked");
});
// the meainig of the proppgation 
//-->In JavaScript, `stopPropagation` is a method used to prevent the further propagation of an event through the DOM (Document Object Model) hierarchy.
