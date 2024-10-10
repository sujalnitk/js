"use strict" ;// treat all JS code as newer version
// alert(3+3) // we are using nodejs not browser 
console.log(3+3
) // code readability

let name = "Sujal"
let age = 18
let isLoggedIn = false

// number => 2 to power 53
// bigInt
// string 
// null => standalone value - object 
// undefined => value not assigned
// symbol => unique 

// object 

// console.log(typeof "hitesh");
// console.log(typeof null);
// console.log(typeof undefined);


// primitive and non primitive (datatypes)
// 7 types primitive : string , number , Boolean , null , undefined , symbol , BigInt

// refernce type (non primitive): arrays , objects , Functions 

const id = Symbol('123')
console.log(id);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive) , Heap (non primitive)

// stack copies value 
// heap pass by refernce 

let user = {
    email : "sujal.com",
    rollno : 23
}

let user1 = user
console.log(user)
console.log(user1)

user1.email = "sujal@gmail.com"

console.log(user1)
console.log(user) // both the value has changed because object don't copt they just point out
