const input = document.getElementById('validation-input');
const validNumber = parseInt(input.getAttribute('data-length'));
input.onblur = e => {
  if (e.target.value.length === validNumber) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};
