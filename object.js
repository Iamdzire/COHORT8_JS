/** Object is a collection of related data
 *  It is wrapped in curly braces and has key-value pairs
 *  The key is the name of the property and the value is the data associated with that property
 *  The key and value are separated by a colon(:)
 * you can access the value of a property using dot notation or bracket notation
 * you can also add new properties to an object using dot notation or bracket notation */

let student = {name: "Christopher", age: 22, score: 76}
student.name = "Tuff"
console.log(student)
delete student.score
console.log(student)
student.height = 5.9
console.log(student)

// Object destructuring: allows you to extract properties from an object and assign them to variables
let {name, age} = student
console.log(name, age)

let students = [
    {name: "Christopher", age: 22, score: 76},
    {name: "George", age: 45, score: 60},
    {name: "Tomiwa", age: 16, score: 80},
    {name: "Esther", age: 26, score: 65}
]
students.forEach(student => student.height = 5.9)
console.log(students)
// Note that we didnt store the result of the forEach method in a variable because it does not return anything. It just runs code on each item in the array.
