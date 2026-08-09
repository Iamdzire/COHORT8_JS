//arithmetic operators
let x = 50
let y = 5

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

//comparison operator
let a = 10;
let b = 20;
console.log(a === b);
console.log(a !== b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b)

//logical operators
let hasBread = true;
let hasButter = false;
console.log(hasBread && hasButter);
console.log(hasBread || hasButter);
console.log(!hasBread);
console.log(!hasButter);

//assignment operators
let p = 33;
console.log(p += 4);
console.log(p -= 6);
console.log(p *= 3);
console.log(p /= 1);
console.log(p %= 10)
/**the first log adds 4 and reassign's it 37
 * while the next log subtracts 6 from 37 and reassign's it 31
 * and the next log multiplies 31 by 3 to give it 93
 * you get the point */

let q = 23;
q ++;
console.log(q)

let r = 71;
r --;
console.log(r)
/**you can see I did this one differently by creating different variables
 * so the reassignment operation isnt happening to one variable */