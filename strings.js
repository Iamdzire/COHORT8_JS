const herName = "EsTHer"
console.log(herName.toLowerCase())
console.log(herName.toUpperCase())

const trimExample = "   Hello World!   "
console.log(trimExample.trim())  //trims whitespace from both ends
console.log(trimExample.trimStart())  //trims whitespace from the start
console.log(trimExample.trimEnd())    //trims whitespace from the end

//.startsWith and .endsWith

let filename = "report_final_2024.pdf";
console.log(filename.startsWith("report")); // true
console.log(filename.startsWith("draft"));  // false
console.log(filename.endsWith(".pdf"));     // true
console.log(filename.endsWith(".docx"));    // false

//slice and substring

const extractExample = "Esther"
console.log(extractExample.slice(0, 3)); // "Est"
console.log(extractExample.slice(3));    // "her"
console.log(extractExample.slice(-3));  // "her"
console.log(extractExample.substring(0, 3)); // "Est"
console.log(extractExample.substring(3));    // "her"
console.log(extractExample.substring(-3));  // "Esther" (negative index treated as 0)


// includes AND indexOf

let email = "uchenduchigozie03@gmail.com"
console.log(email.indexOf("."))

if(email.indexOf("@") !== -1) {
    console.log('Valid E-mail Format')
}

let bio = 'I am a backend developer from lagos'
console.log(bio.includes("backend"))
console.log(bio.includes("frontend"))
console.log(bio.includes("lagos"))
if(bio.includes("developer")){
    console.log("You are a Dev")
}


/** replace and replaceAll
 *  They both take in two parameters, 1st is what you want to replace and 2nd is what you want to replace it with.
 *  ".replace" replaces the first occurance of what you are replacing, while ".replaceAll" replaces all occurances. */

/** .split
 *  Takes in a parameter which is what you want to split by
 *  return type is an array */


 

const stringText = "Chigozie is a tall boy, Chigozie is a very hardworking boy and Chigozie is a software dev"
console.log(stringText.replace("Chigozie", "Uchendu"))
console.log(stringText.replaceAll("Chigozie", "he"))
console.log(stringText.split("is"))
console.log(stringText.split(",")[1].replaceAll("Chigozie", "he"))

/** .join
 *  Basically does the opposite of what split does */

// reverse

let reverseName = "Chigozie"
console.log(reverseName.split("").reverse().join(""))

/** we can use something called a ternary operator in place of our if else statement
 *  all we have to do is first put in our condition followed by a question mark.
 *  It is of two parts, the true/first part and the false/second part. they are seperated by a column */

 const wordCheck = word => word === word.split("").reverse().join("") ? "It is a Palindrome word" : "It is not a Palindrome word"
 console.log(wordCheck("Chigozie"))


 /** padStart AND padEnd
  *  Add characters to the start or end of a string until it reaches a certain length. 
  *  Takes in 2 parameters. first is the length of characters you want the string to be, second is the character you want to increase it by */

 let id = "42"
 console.log(id.padStart(4, "0"))
 console.log(id.padEnd(3, "7"))
// Masking a card number
const cardNumber = "1234"
console.log(cardNumber.padStart(16, "*"))


/** .repeat
 *  Creates a new string by repeating the original string a given number of times */

let repeatString = "OAU POST UTME PAST QUESTIONS "
console.log(repeatString.repeat(5))