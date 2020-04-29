let message = 1;
let total = 0;

while (true) {
    message = prompt('Enter a number');
    if (message === null) {
        break;
    } else {
    total += parseInt(message);
    }
}

alert(`Total sum is ${total}`);