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

// Object destructuring: allows you easily extract values from an object 
let {name, age} = student
console.log(name, age)

// you can also change the name of the key when destructuring an object
let {name: studentName, age: studentAge} = student
console.log(studentName, studentAge)

let students = [
    {name: "Christopher", age: 22, score: 76},
    {name: "George", age: 45, score: 60},
    {name: "Tomiwa", age: 16, score: 80},
    {name: "Esther", age: 26, score: 65}
]
students.forEach(student => student.height = 5.9)
console.log(students)
// Note that we didnt store the result of the forEach method in a variable because it does not return anything. It just runs code on each item in the array.


// spread "..." operator: allows you to copy the values of an object into a new object. It does not affect the original object.

let DNA = {gender: "XY", bloodGroup: "O+", complexion: "Fair"}
let moreDNA = {eyeColour: "Brown", hairColour: "Black", ...DNA}
console.log(moreDNA)

//rest "..." operator: allows you to collect the remaining properties of an object into a new object. It does not affect the original object.

let {gender, ...otherProperties} = {gender: "XY", bloodGroup: "O+", complexion: "Fair"}
console.log(gender)
console.log(otherProperties)

// ITERATING THROUGH OBJECTS: Unlike arrays, objects do not have a direct index. Here are three ways to loop through an object.

// for...in loop: allows you to loop through the properties of an object. It does not affect the original object.

let house = {type: "bungalow", rooms: 3, bathrooms: 2, location: "Lagos"}
for (let key in house) {
    console.log(`${key}: ${house[key]}`)
}
// key would be the name of the property and house[key] would be the value of the property.


// object.keys() method: allows you to get an array of the keys of an object. It does not affect the original object.

console.log(Object.keys(house))

// object.values() method: allows you to get an array of the values of an object. It does not affect the original object.

console.log(Object.values(house))

//object.entries() method: allows you to get an array of the key-value pairs of an object. It does not affect the original object.

console.log(Object.entries(house))