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
