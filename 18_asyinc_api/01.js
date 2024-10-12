// in this we are going to learn about the async and api i the java script
// async function getdata(){




//     return new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve(455)
// },3500);// this is the way to add the time in the miliseconds.
//     })
// }



//LETS SEE ABOUT THE FETCH API
async function getdata(){
  let y = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await y.json()// note fetch api ko do bar await karke pass karna padata hai
  console.log(data)
  return 456;
}

async function wait(){
console.log("Loding modeules")
console.log("do somethig stuff")
let data =  await getdata()
console.log("loading") // WRAP KARNA PARTA HAI AGAR KSI FUNCTION KO AWAIT KARTE HAI TOHH
console.log(data)
console.log("process data")
console.log("task2")}
wait()