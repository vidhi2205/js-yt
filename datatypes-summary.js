// primitive datatype(call by value)

// 7 types: string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id==anotherId)

// const bigNumber=3536424364634265474n // now its a bigint type




// reference type(non primitive)

// array,objects,functions

const heros=["i ","me","you","we"]
let myObj={
    name:"vidhi",
    age:19
}

const myFunction=function(){
    console.log("hello world")
}

console.log(typeof outsideTemp) // null type is object
// and undefiend is undefined only

console.log(typeof myFunction)
