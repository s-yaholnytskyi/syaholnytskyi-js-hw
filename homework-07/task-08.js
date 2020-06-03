const controls = document.getElementById('controls');
const createBtn = document.querySelector('[data-action=render]');
const clrBtn = document.querySelector('[data-action=destroy]');
const boxes = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const divSize = 30;
let counter = 0;

console.log(input.value);

createBtn.onclick = () => {
  const amount = parseInt(input.value);
  let result = '';
  for (let i = 1; i < amount + 1; i++) {
    const color = [
      Math.floor(Math.random() * 250),
      Math.floor(Math.random() * 250),
      Math.floor(Math.random() * 250),
    ];
    result += `<div style="width: ${divSize + counter * 10}px; height: ${
      divSize + counter * 10
    }px; background-color: rgb(${color[0]}, ${color[1]}, ${color[2]});"></div>`;
    counter += 1;
  }
  boxes.insertAdjacentHTML('beforeend', result);
};

clrBtn.onclick = () => {
  boxes.innerHTML = '';
  counter = 0;
};
