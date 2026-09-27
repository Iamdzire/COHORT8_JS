const sample = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded")
        }, 2000)
    })
}
const success = data => console.log(`Success: ${data}`)
const fail = data => console.log(`Failed: ${data}`)

sample()
        .then(success, fail)


const checkAge = age => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(age >= 18){
                resolve("You are allowed")
            }else{
                reject("You are not allowed")
            }
        }, 3000)
    })
}
const onsuc = data => console.log(`Success: ${data}`)
const onFail = data => console.log(`Failed: ${data}`)

checkAge(17)
        .then(onsuc)
        .catch(onFail)



const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Chigozie")
        }, 4000)
    })
}
const getGreeting = name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}`)
        }, 4000)
    })
}
const onSuccess = data => console.log(`${data}`)
const onFailure = data => console.log(`${data}`)

getUser()
        .then(getGreeting)
        .then(onSuccess, onFailure)


const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User data")
        }, 1000)
    })
}
fetchData()
        .then(data => console.log(`${data}`))


const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("One")
        }, 1000)
    })
     
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Two")
    }, 2000)
})
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Three")
    }, 1500)
})

Promise.all([promise1, promise2, promise3])
                                            .then(data => console.log(data))


const a = 15
const b = 4
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


let value = "25.75"
console.log(value)
let numValue = parseFloat(value)
console.log(numValue)
let newValue = numValue * 2
console.log(newValue)
let netValue = newValue.toFixed(1)
console.log(netValue)


const checkNumber = num => {
    if(num % 2 !== 0){
        return "Odd"
    }else{
        return "Even"
    }
}
console.log(checkNumber(7))
console.log(checkNumber(10))


const random = Math.random()
console.log(random)
const sigRandom = random * 10
console.log(sigRandom)

console.log(Math.floor(9.7))
console.log(Math.ceil(9.3))

console.log(Math.max(12, 45, 8, 32))


const isValidNumber = value => {
   return isFinite(value) ? "true" : "false"
}
console.log(isValidNumber(42))
console.log(isValidNumber("hello"))
console.log(isValidNumber(NaN))




