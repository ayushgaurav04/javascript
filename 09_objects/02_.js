// this is about the objects
let Tinderuser = new Object();// this is the single term object declare method
console.log(Tinderuser);
Tinderuser.id="ayush04"
Tinderuser.name="Ayush"
Tinderuser.age= 19;
Tinderuser.isLogin=false;
console.log(Tinderuser);// this is the output of the program
const regularuser={
    email: "ayush@123@gamil.com",
    user_name:{
        firstname:"Ayush",
        lastname:"gaurav"
    }
}
// console.log(user_name);
console.log(regularuser.user_name.firstname,regularuser.user_name.lastname);

const obj1={1:"A",2:"B"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};
const obj5 = Object.assign({}, obj1,obj2,obj3);
console.log(obj5);
let obj6={...obj1,...obj2,...obj3}// this is the spread operator which is used in the most of the time
console.log(obj6);

// let see the other things

const myobj = [
     {
        name: "ayush",
        mail: "ayush1234@gmail.com",
    },
     {
        name: "rahul",
        mail: "ayush1234@gmail.com",
    },
     {
        name: "ayush",
        mail: "ayush1234@gmail.com",
    },
]

console.log (myobj[1].name)
// console.log (Object.values(myobj))
// console.log (Object.keys(myobj))
// console.log (Object.entries(myobj))
console.log(Object.values(Tinderuser))// this will give the values 
console.log(Object.keys(Tinderuser))// this will give the keys 
console.log(Object.entries(Tinderuser))// it will conver the values in the array form
console.log(Tinderuser.hasOwnProperty('name'))// this will give the bollean type of the value as the output.(this will that in an object the particular values exist or not)

