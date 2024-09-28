// this is all about to calculate the factorial of the number
// for example it is 4 its factorial will be 4*3*2*1
let n;
 let factorial = (n)=>{
if(n<=1){
    return 1;
}
else if(n==0){
return 0;
}
else{
return n*factorial(n-1)}
 }
//  factorial(4)
 console.log(factorial(0));




