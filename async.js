// Async javascript: This basically means the code wont run using javascript line by line method

const orderPizza = callback => {
    setTimeout(() => { 
        const food = "pizza"
        callback(food)
    }, 5000)
}
const pizzaReady = food => console.log(`Eat the ${food}`)

orderPizza(pizzaReady)
console.log("Fetching the remote")

/** Quick explanation to the code above: This simply shows how callback functions can be used to control asynchronisation.
orderPizza function first runs even though it would take 5 seconds to run, then pizzaReady would run next.
Thats why the terminal would print "Eat the pizza" after 5 seconds.
 */

const testing =test => {
    const fruit = "apple"
    test()
}
const getFruit = fruit => console.log(`I love ${fruit}`)
testing(getFruit)

/** Here we can see that the testing function runs first because the terminal printed "I love undefined",
because the callback does not have an argument
 */

// Go to Backend_Cohort8/ to continue async js and promises
