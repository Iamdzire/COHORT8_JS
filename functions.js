/** Functions: A function is a block of code that you write once and can run as many times as you want. This is the syntax
 * function functionName(parameter){
 * code to run when you call the function
 * } */

/** function declaration are of two types
 * - Name function (function)
 * - Arrow function (=>) */



function sayHello(){
    console.log("Hello, everyone!")
}
sayHello();

//function with parameter

function greet(name){
    console.log(`welcome, ${name}!`)
}
greet("Chigozie");

function welcome(name){
    console.log(`welcome to class MR/MISS/MRS ${name}`)
}
welcome("Esther")

/** "return" keyword is used to send the result of a function
 * A function without return keyword will return "undefined" when that function is put in a variable and printed out
 *  Any code after the "return" keyword would be ignored
 *  After using "return" in your function code, always use console.log when calling your function */

// Static Function

function add(){
    let x = 4;
    let y = 5;
    return x + y
}
console.log(add())

// Dynamic Function

function addition(x, y){
    return x + y
}
console.log(addition(2, 3))



function ageCheck(age){
    if(age <= 18){
        return "PLEASE GET OUT!!! YOU ARE UNDERAGED"
    }else{
        return "BUY ONE BOTTLE FOR ME EGBON!!"
    }
}
let estherAge = ageCheck(20)
console.log(estherAge)

function baloonGame(luckyNum){
    if(luckyNum === 4){
        return "CONGRATULATIONS!!!"
    }else{
        return "TRY AGAIN!!!"
    }
}
let whatYouGot = baloonGame(5)
console.log(whatYouGot)


/** Scope
 * - Global Scope: variables declared outside a function which can be accessed by any function
 * - local scope: variables declared inside a function, and can be accessed by only that function */

function studentScore(score){
    if(score >= 70){
        return "A"
    }else if(score >= 50){
        return "B"
    }else{
        return "F"
    }
}
let yourScore = studentScore(66)
console.log(yourScore)

// Arrow function

const minus = (num) =>{
    return num - 50
}
let result = minus(75)
console.log(result)

/** When using the arrow function for just one parameter, you can remove the parenthesis around the parameter. 
 - Also, when using the arrow function for just one line of code, you can remove the curly braces and the "return" keyword. */

const haller = name => `Hello, ${name} !`
console.log(haller("Chigozie"))

const sayHi = () => console.log("Hi, there!")
sayHi()

const showArtist = name => `I love listening to ${name}`
console.log(showArtist("burnaBoy"))

// Callback function: they are functions that are passed as arguments to other functions. They give the action to do when the function is called. They are used to make our code more dynamic and reusable.

const sayName = name => `My name is ${name}`
const useCallBack = myNameIs => myNameIs("Asake")
console.log(useCallBack(sayName))

const double = number => number * 2
const run = multiplication => multiplication(15)
console.log(run(double))

const showMessage = message => message
const execute = callBack => callBack(`I am learning callbacks`)
console.log(execute(showMessage))