const studentScore = (score) => {
    switch(true){
        case(score >= 70): return "A"
        case(score >= 60): return "B"
        case(score >= 50): return "C"
        default: return "F"
    }
}
console.log(studentScore(66))

function number(value){
    switch(true){
        case(value > 0): return "Positive"
        case(value === 0): return "Zero"
        default: return "Negative"
    }
}
console.log(number(0))

const day = (dayNumber) => {
    switch(dayNumber){
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        case 7: return "Sunday"
        default: return "Day doesn't exist"
    }
}

console.log(day(78))

const eligibility = (age) => {
    switch(true){
        case(age >= 18): return "You are eligible"
        default: return "You aren't eligible, wait till you are 18 or above"
    }
}

console.log(eligibility(12))

for(num = 1; num <= 20; num++){
    console.log(num)
}


let integer = 0
while(integer <= 50){
    console.log(integer);
    integer += 2
}



let sum = 0
i = 1
while(i <= 100){
    console.log(sum = sum + i)
    i++
}

let multiplication = 1
while(multiplication <= 12){
    console.log(7 * multiplication)
    multiplication++
}


let reverse = 10
while(reverse >=1){
    console.log(reverse)
    reverse--
}


for(num = 1; num <= 30; num++){
    switch(true){
        case((num % 3 === 0) && (num % 5 === 0)): console.log("FizzBuzz"); break;
        case(num % 3 === 0): console.log("Fizz"); break;
        case(num % 5 === 0): console.log("Buzz"); break;
        default: console.log(num)
    }
}

const numbers = [20, 33, 45, 5, 7, 81]
let largest = numbers[0]

for(i = 1; i <= numbers.length; i++){
    switch(true){
        case(largest < numbers[i]): largest = numbers[i];
    }
}
console.log(largest)
