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
console.log(extractExample.indexOf("s"))
console.log(extractExample.includes("s"))