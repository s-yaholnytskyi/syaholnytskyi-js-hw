let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Enter a number: ');
  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert('Value is not a number. Try again.');
    continue;
  }
  numbers.push(Number(input));
}
if (numbers.length !== 0) {
  for (const element of numbers) {
    total += element;
  }
  console.log(`Total sum of numbers is ${total}`);
}
