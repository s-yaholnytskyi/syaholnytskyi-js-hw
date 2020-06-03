import items from './src/gallery-items.js';
let gallery = document.querySelector('ul.js-gallery');

for (let i = 0; i < items.length; i++) {
  var newImg = document.createElement('img');
  newImg.src = items[i].preview;
  newImg.alt = items[i].description;
  newImg.setAttribute('data-source', items[i].original);
  //newImg.source = items[i].original;
  newImg.classList.add('gallery__image');
  var newLink = document.createElement('a');
  newLink.classList.add('gallery__link');
  newLink.href = `${items[i].original}`;
  newLink.appendChild(newImg);
  /*newLink.onclick = e => {
    e.preventDefault();
    console.log(e);
  };*/
  gallery.insertAdjacentElement('beforeend', newLink);
}

gallery.addEventListener('onclick', e => {
  if (e.target == e.currentTarget) {
    return;
  }
  e.preventDefault();
  console.log(e);
});
