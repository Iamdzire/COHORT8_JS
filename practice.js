// This is where i practice 


//Section A: Data Types Practice
const name = "Uchendu Chigozie Emmanuel";
let age = 22;
let studentStatus = true;
console.log(name);
console.log(age);
console.log(studentStatus);
console.log(typeof(name, age, studentStatus))

let shoppingList = ["rice", "beans", "tomatoes", "eggs"];
console.log(shoppingList);
console.log(typeof(shoppingList))
//It gave the data type name as "object" instead of "array"


//Section B: Arithmetic Operations
let num1 = 30;
let num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2)

let m = 17;
let n = 5;
console.log(m % n)

let price = 1500;
let discount = 200;
console.log(price - discount)


//Section C: Comparison operators
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b)
/**"===" compares values and tells us that they are not strictly equal
 * (10) is a number, while ("10") is a string. therefore false
 * 
 * "==" is saying that the two variable names has been declared
 * by the same value. therefore true */

let p = 75;
let q = 50;
console.log(p >= q)


//Section D: Logical Operators
let hasTicket = true;
let hasID = false;
console.log(hasTicket && hasID);
console.log(hasTicket || hasID)


//Section E: Mini Project
let password = "1234";
let correctPassword = "1234";
console.log(password === correctPassword)

let itemAffordability = true;
let budgetGreaterThan0 = true;
console.log(itemAffordability && budgetGreaterThan0)

const checkAge = age => {
    if(age < 18){
        return "You are a minor"
    }else if((age >= 18) && (age <= 60)){
        return "You are an adult"
    }else{
        return "You are a senior citizen"
    }
}
console.log(checkAge(16))
console.log(checkAge(22))
console.log(checkAge(73))

let scores = [45, 78, 90, 32, 88, 56, 100, 67]
function getAverage(scores){
let total = scores.reduce((acc, cur) => acc + cur, 0)
let average = total / scores.length
   if(average >= 80){
    return "Excellent"
   }else if((average >= 60) && (average <= 79)){
    return "Good"
   }else{
    return "Needs Improvement"
   }
}
console.log(getAverage(scores))

let students = [
    {name: "Christopher", age: 22, score: 76},
    {name: "George", age: 45, score: 60},
    {name: "Tomiwa", age: 16, score: 80},
    {name: "Esther", age: 26, score: 65}
]
const getQualifiedStudents = students.filter(student => student.age >= 18 && student.score >= 70)
console.log(getQualifiedStudents)

let numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const processNumbers = numbers =>{
    return numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2)
}
console.log(processNumbers(numbers))

const divideNumbers = (stNumber, ndNumber) => {
    try{
    if(ndNumber === 0){
        throw new Error("Cannot divide by zero")
    }
    return stNumber / ndNumber
}catch(error){
    return "Failed: " + error.message
}
}
console.log(divideNumbers(4, 2))
console.log(divideNumbers(9, 0))
console.log(divideNumbers(3, 9))


const checAge = age => {
    try{
        if(typeof age !== "number"){
            throw new Error("Age must be a number")
        }
        if(age < 0){
            throw new Error("Age cannot be negative")
        }
        console.log("Valid age")
    }catch(err){
        console.log(err.message)
    }finally{
        console.log("Age check completed")
    }
}
checAge("Chigozie")
checAge(-2)
checAge(22)

let user = {
    name: "Asake",
    age: 28,
    email: "asake@email.com"
}
const getUserProperty = property => {
    try{
        if(user[property] === "undefined"){
            throw new Error("Property not found")
    }
    return user[property]
}catch(err){
    return err.message
}
}
console.log(getUserProperty("email"))
console.log(getUserProperty("height"))


function printWord() { 
    console.log("Backend"); 
} 
for (let i = 1; i <= 4; i++) { 
    printWord(); 
}