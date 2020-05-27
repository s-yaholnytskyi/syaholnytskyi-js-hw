const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.oninput = e => {
  if (e.target.value === '') {
    output.textContent = 'незнайомець';
    return;
  }
  output.textContent = e.target.value;
};
