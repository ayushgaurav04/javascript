// this all about the call back function in the javascript
const cal=(a,b,operation)=>{
return operation(a,b) 
}
const add = cal(3,4 , function(num1, num2){
    return num1+num2;
})
console.log(`the value after the addation is ${add}`)
const kal =  (d,e)=>d-e;// yeh arrow agar single ho to value return kar raha hai
const sub=kal(5,2)
console.log(`The value after the substration is ${sub}`)