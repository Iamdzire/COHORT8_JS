/** Array Methods
 * .length: Gives the number of items in an array. .length is not a method rather a property */

let students = ["Ebube", "Ekene", "Chigozie", "Chichi", "Chiemerie"]
console.log(students.length)

console.log(students[0])
/**The above console.log is telling us that it went into the array "students" and grab the item in the position "0"
and the result would be "Ebube". The first indexing position in an array starts from "0" */

// .push: Adds items to the end of an array

students.push("Ada")
console.log(students)

// .unshift: Adds items to the beginning of an array

students.unshift("obi")
console.log(students)

// .pop: Removes the last item in an array
// .shift: Removes the first item in an array

students.pop()
students.shift()
console.log(students)

// .includes: checks if an item exists in an array. Return type is boolean
// .indexOf: chechs if an item exists in an array and returns the index position. If it doesnt exist, it returns "-1"

console.log(students.includes("Ekene"))
console.log(students.indexOf("Ekene"))

// .reverse: this reverses the order of the items in an array

console.log("This is reverse:", students.reverse())
console.log(students)

// .sort: this sorts the items in an array in alphabetical order

console.log("This is sorted:", students.sort())

/** .slice: this returns a portion of an array into a new array. 1 means it will start from index
position 1 and end at index position 3, also excluding the index position 3.
    minus sign means it starts counting from the back of the array from -1. Therefore -4 equals "chiemerie"
and -1 means it stops at "Ekene" and excludes it.
    In other words 1 and -4 are inclusive, while 3 and -1 are exclusive. 
    this method does not affect the original array, it creates a new array with the sliced items. */


console.log("This is sliced:", students.slice(1, 3))
console.log("this is sliced:", students.slice(-4, -1))

console.log("Original array:", students)

/** .splice: this method removes, add, and replace items in an array. first parameter is the index
position to start from, second parameter is the number of items to remove, and the third parameter
 is the item to add.
    This method affects the original array. */

console.log("This is spliced:", students.splice(1, 3, "Ada", "Obi", "Funmi", "Ade", "Tobi"))
console.log("Original array:", students)

// Higher Order Array Methods: These are methods that accept callback function as their parameter.

 /** forEach method: loops through an array and prints. It does not affect the original array.
  * if you store the result of the forEach method in a variable, it will return "undefined" because it does not return anything. */

 let artists = ["BurnaBoy", "Asake", "Wizkid", "Davido", "Olamide"]
artists.forEach(artist => console.log(`I love listening to ${artist}`))
 

 // map Method: Creates a new array, by transforming each element in an array individually. It does not affect the original array.

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const doubleNumbers = numbers.map(num => num * 7)
 console.log(doubleNumbers)
// "num" above is representing each item in the array "numbers" and the result is a new array with each item multiplied by 7


const marketList = ["rice", "beans", "garri", "yam", "plantain"]
const addedPrefix = marketList.map(item => {
    return `I want to buy ${item}`
})
console.log(addedPrefix)

/** filter Method: Return elements that match a condition. It does not affect the original array.
 * Returns an empty array if no elements match the condition. */

const oddNumbers = numbers.filter(num => num % 2 !== 0)
console.log(oddNumbers)

const complexion = ["dark", "fair", "light", "dark", "fair", "dark"]
const darkComplexion = complexion.filter(item => item === "dark")
console.log(darkComplexion)

/** find Method: Returns the first element that matches a condition. It does not affect the original array.
 * Returns undefined if no element matches the condition. */

const firstEvenNumber = numbers.find(num => num % 2 === 0)
console.log(firstEvenNumber)

/** findIndex Method: Returns the index position of the first element that matches the condition. It does not affect the original array.
 * Returns -1 if no element matches the condition. */

const firstEvenNumberIndex = numbers.findIndex(num => num % 2 === 0)
console.log(firstEvenNumberIndex)

// reduce Method: loops through an array and reduces it to a single value. It does not affect the original array.

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumOfNumbers)
/** The "0" above is the initial value of the accumulator. If it is not provided, the first element in the array will be used as the initial value of the accumulator.
 * "accumulator" and "currentValue" are just names given to the parameters of the callback function. You can name them anything you want. The first parameter is the accumulator, and the second parameter is the current value of the array element being processed. */

const productOfNumbers = numbers.reduce((multip, cur) => multip * cur, 2)
console.log(productOfNumbers)