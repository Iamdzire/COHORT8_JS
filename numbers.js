console.log(0.1 + 0.2) // 0.30000000000000004 is what u get in terminal not 0.3

let age = 25
console.log(typeof(age)) // number
let price = 1499.99
console.log(typeof(price)) // number
let negative = -30
console.log(typeof(negative)) // number
let big = 9_000_000 // underscore is used to separate numbers for better readability
console.log(typeof(big)) // number


// toFixed(): converts a number into a string, keeping a specified number of decimals.
let num = 1499.567988
//console.log(num)
console.log(num.toFixed(2)) // 1499.57
console.log(num.toFixed(4)) // 1499.5680

let tax = 0.1 + 0.2
console.log(tax.toFixed(2)) // 0.30



// toPrecision(): converts a number into a string, keeping a specified number of significant digits.
console.log(num.toPrecision(2)) // 1500
console.log(num.toPrecision(3)) // 1500
console.log(num.toPrecision(5)) // 1499.6

let num2 = 0.000123456789
console.log(num2.toPrecision(2)) // 0.00012
console.log(num2.toPrecision(4)) // 0.0001235



/** Sometimes data arrives as strings and we need to do math with it. These three functions help convert string to numbers

* parseInt(): Converts string to whole number, ignores decimals and characters after the number
* parseFloat(): Converts string to number, considers decimals but ignores characters after the number
* Number(): Converts string to number/converts strictly. for numbers only. Included characters will return NaN. Also converts empty string to 0 and boolean true/false to 1/0
*/

console.log(parseInt("100")) // 100
console.log(parseInt("100.7")) // 100
console.log(parseInt("100xyz")) // 100
console.log(parseInt("xyz100")) // NaN

console.log(parseFloat("100.7")) // 100.7
console.log(parseFloat("100.7xyz")) // 100.7
console.log(parseFloat("xyz100.7")) // NaN

console.log(Number("100")) // 100
console.log(Number("3.142")) // 3.142
console.log(Number("100xyz")) // NaN
console.log(Number("xyz100")) // NaN
console.log(Number("")) // 0
console.log(Number(true)) // 1
console.log(Number(false)) // 0


/** isNaN(): Returns true if value is not a valid number

* isFinite(): returns true if value is a finite number. Number that is countable/is not +/- infinity)
 */

console.log(isNaN("34")) // Can be converted to a number, so false
console.log(isNaN(40)) // false
console.log(isNaN(0)) // false
console.log(isNaN("Hello")) // true

console.log(isFinite(-3)) // true
console.log(isFinite("100")) // Can be converted to number, so true
console.log(isFinite(0.555)) // true
console.log(isFinite("Hello")) // false

console.log(Number.isNaN("hello")) // Number is always a stricter, so false



/** Math object:

* Math.round: Rounds to the nearest whole number
* Math.floor: Always rounds to -ive infinity
* Math.ceil: Always rounds to +ive infinity
* Math.max: Returns the largest value from a list of numbers
* Math.min: Returns the smallest value from a list of numbers
* Math.abs: Returns the absolute(positive) value of a number
 */

console.log(Math.round(2.7)) // 3
console.log(Math.floor(-3.7)) // -4
console.log(Math.floor(3.7)) // 3
console.log(Math.ceil(-1.2)) // -1
console.log(Math.ceil(1.4)) // 2
console.log(Math.max(23, 34, 45, 70)) // 70
console.log(Math.min(83, 97, 44, 12, 30)) // 12
console.log(Math.abs(-30)) // 30


// Math.random: Returns a random decimal number between 0 (included) and 1 (not included).
console.log(Math.random())

const testing = Math.round(Math.random() * 100) + 4
console.log(testing)

/** Math.pow: Takes in two parameters. This is self explanatory

* Math.sqrt: Square root of a number

* Math.PI: (3.142.....)
 */


console.log(Math.pow(2, 12))
console.log(Math.sqrt(144))
console.log(Math.PI.toFixed(3))