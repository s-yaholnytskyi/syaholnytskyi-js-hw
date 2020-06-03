const value = document.getElementById('value');
let counter = parseInt(value.innerText);

function increment() {
  counter++;
  value.innerText = counter;
}

function decrement() {
  counter--;
  value.innerText = counter;
}
console.log(counter);
document.querySelector('[data-action=increment]').onclick = increment;
document.querySelector('[data-action=decrement]').onclick = decrement;
