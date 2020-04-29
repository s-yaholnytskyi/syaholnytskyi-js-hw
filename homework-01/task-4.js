let credits = 23580
let pricePerDroid = 3000
let message = prompt('Enter number of droids you want to buy:')

if (message === null) {
    console.log('Canceled by user')
} else {
    message = parseInt(message)
    let totalPrice = message * pricePerDroid
    if (totalPrice > credits) {
        console.log('You have no enough money')
    } else {
        console.log(`You bought ${message} droid(s). You balance is ${credits - totalPrice} credits`)
    }
}