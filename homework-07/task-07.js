const fontControl = document.getElementById('font-size-control');
const object = document.getElementById('text');
fontControl.oninput = e => {
  object.style.fontSize = `${e.target.value}px`;
  console.log(e);
};
