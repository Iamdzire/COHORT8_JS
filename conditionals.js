// Control Flow

 /**  Conditionals: Run certain code only when a condition is true (if/else, switch)
 * if/else
 * "if" opens the condition */

let age = 22;

if(age >= 18){
    console.log("you can vote")
}else{
    console.log("you can not vote")
}

let gender = "female";

if(gender === "female"){
    console.log("you are a female, use the lady's restroom")
}else if(gender === "non-binary"){
    console.log("use the non-binary room")
}else if(gender === "trans"){
    console.log("use the trans room")
}else{
    console.log("you are a male, use the men's restroom")
}

let studentScore = 64
if(studentScore >= 90){
    console.log("A")
}else if(studentScore >= 70){
    console.log("B")
}else if(studentScore >= 50){
    console.log("c")
}else{
    console.log("F")
}


/** switch: When you are checking one variable against many possible values,
switch is cleaner and easier to read than a long chain of else if statements
*   case: Each possible value of the variable you are checking.
*   break: Stops JavaScript from falling into the next case. Always include this!
*   default: Runs when no case matches (like else in an if statement). */

let day = "Monday"
switch(day){
    case "Monday": console.log("New week, fresh start!"); break;
    case "Friday": console.log("Almost the weekend!"); break;
    case "Saturday": 
    case "Sunday": console.log("It is the weekend! Rest up."); break;
    default: console.log("Midweek grind!")
}

// If you are using switch in a function, and you use returu on your case, you dont need to put break because return automatically stops the function and exits

const getDayName = (day) => {
    switch(day){
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        case 7: return "Sauday"
        default: return "Invalid day"
    }
 }
 console.log(getDayName(1))


/** Loops: Run the same code multiple times (for, while, for...of).
 * 
 * for loop: Used when you know the amount of time you want the code to run for. This is the syntax
 * for(start; condition; increment){
 *   code to repeat
 * } */

for(let i=0; i<10; i+=2){
    console.log(i)
}
/** This means i starts at 0, then increases by 2, but must not be >= 10
 * Thats the idea behind loops, it runs same code multiple times with changes in its input */


let arrayOfNames = ["21Savage", "Drake", "2pac", "BurnaBoy", "NF", "RoddyRich"]
console.log(arrayOfNames.length)
for(let names=0; names<arrayOfNames.length; names++){
    console.log("best of " + arrayOfNames[names])
}

/** The last part "arrayOfNames[names]" means "Go into the list "arrayOfNames" and grab the item in the position "names"
 * remember we gave names a starting of 0, therefore 21Savage is the starting 
 * Remember in an array the first item is = 0, the second is = 1, and so on...
 * .length above in arrayOfNames means how many items are on the list
 * 6 items are on the list but the counting starts from 0 in an array, so technically speaking 5 items are present
 * for the "for" loop immediately above, it means it would start from 0 and steadily increase by one but never be >=6
 * 
 * To summarise everything i did above: Both console.log and for loop
 * result goes into the array of list and selects the item in the position "names"(names starts from the position 0)
 * and adds "best of " to it, then the process is repeated in steady of 1 to the position 
 * and stops when the position is at 5 */

for(let x=0; x<36; x++){
    console.log(x * 2)
}

for(let y=0; y<=12; y++){
    console.log(y * 3)
}

let scores = [20, 12, 25, 25, 4, 8];
for(let newScore=0; newScore<scores.length; newScore++){
    console.log(scores[newScore] + 20)
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let count = 0; count<number.length; count++){
    console.log(number[count])
}



/**  While Loop: Used when you do not know the amount of time you want the code to run for. This is the syntax
 * while(condition){
 * code to repeat
 * } */

//always make sure the condition will eventally become false, if not the code will repeat to infinity


let loginAttempts = 1
while(loginAttempts <=3){
    console.log(`attemt number ${loginAttempts}`)
    loginAttempts++
}
// Above "loginAttempts++" is added to make the condition false and end the loop

let artists = ["Wizkid", "DavidO", "BurnaBoy", "Asake", "Rema"]
let artistName = 0
while(artistName<artists.length){
    if(artists[artistName].length > 5){
    console.log(artists[artistName])
    }
    artistName++
}

// for...of loop: This is the easiest way to loop through every item in an array

let students = ["Chigozie", "Chiemerie", "Ekene", "Chichi", "Ebube"]
for(let student of students){
    console.log(`Welcome ${student}!`)
}





