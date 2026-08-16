// syntaxError: You made a typo or forgot to add something like a closing bracket.

// referenceError: You are trying to use a variable that has not been declared or is out of scope.

// typeError: You are trying to use a method or property on a data type that does not support it. For example, trying to use the .push() method on a string will give you a typeError because strings do not have the .push() method.

// TRY and CATCH: try-catch lets your program handle errors gracefully. Instead of crashing, JavaScript runs your "backup plan" inside the catch block.

try {
    // Code that might fail goes here
    let result = 10 / 0;
    console.log(result);
    undefinedFunction(); // This will cause an error!
    console.log("This line will NOT run.");
} catch (error) {
    // This runs ONLY if something goes wrong
    console.log("An error occurred: " + error.message + " " + error.name + " " + error.stack);
}

console.log("The program continues here.");

/** The error object inside catch
 * - .message: A description of the error.
 * - .name: The type of error (e.g., ReferenceError, TypeError).
 * - .stack: A stack trace that shows where the error occurred. */


//The finally block: ALWAYS runs, whether or not an error occurred. Use it for cleanup tasks like closing a connection or showing a "loading done" message.

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (userId <= 0) {
            throw new Error("User ID must be greater than 0"); // Custom Error Thrown
        }
        console.log("Data loaded for user: " + userId);
    }catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection."); // ALWAYS runs
    }
}

loadUserData(5);   // Data loaded for user: 5  -->  Loading complete.
loadUserData(-1);  // Failed: User ID must be greater than 0  -->  Loading complete. */


// Throwing your own errors: You can create your own errors using the throw statement. This is useful for validating input or enforcing rules in your code.

function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty!");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered: " + name + ", Age: " + age);
    } catch (error) {
        console.log("Registration failed: " + error.message);
    }
}

registerStudent("Bola Okafor", 22); // Student registered: Bola Okafor, Age: 22
registerStudent("", 22);            // Registration failed: Name cannot be empty!
registerStudent("Kemi", 12);        // Registration failed: Age must be between 16 and 60.

// when a function has a return inside try or catch, the finally block still runs first before the value is actually given back

const checAge = age => {
    try{
        if(typeof age !== "number"){
            throw new Error("Age must be a number")
        }
        if(age < 0){
            throw new Error("Age cannot be negative")
        }
        return "Valid age"
    }catch(err){
        console.log(err.message)
    }finally{
        console.log("Age check completed")
    }
}
checAge("Chigozie")
checAge(-2)
console.log(checAge(22))




