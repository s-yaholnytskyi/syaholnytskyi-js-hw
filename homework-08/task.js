import items from './src/gallery-items.js';
let gallery = document.querySelector('ul.js-gallery');
const lightBoxImage = document.querySelector('img.lightbox__image');
const lightBox = document.querySelector('div.lightbox');
const lightBoxBtn = document.querySelector('button.lightbox__button');
const divLightBoxOverlay = document.querySelector('div.lightbox__overlay');

function choseNextItem(source) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].original === source) {
      switch (i) {
        case items.length - 1:
          return [items[0].original, items[0].description];
        default:
          return [items[i + 1].original, items[i + 1].description];
      }
    }
  }
}

function chosePreviousItem(source) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].original === source) {
      switch (i) {
        case 0:
          return [
            items[items.length - 1].original,
            items[items.length - 1].description,
          ];
        default:
          return [items[i - 1].original, items[i - 1].description];
      }
    }
  }
}

const closeLightBox = () => {
  lightBox.classList.remove('is-open');
  lightBoxImage.src = '';
  lightBoxImage.alt = '';
};

lightBoxBtn.addEventListener('click', closeLightBox);
divLightBoxOverlay.addEventListener('click', closeLightBox);

for (let i = 0; i < items.length; i++) {
  var newImg = document.createElement('img');
  newImg.src = items[i].preview;
  newImg.alt = items[i].description;
  newImg.setAttribute('data-source', items[i].original);
  newImg.classList.add('gallery__image');
  var newLink = document.createElement('a');
  newLink.classList.add('gallery__link');
  newLink.href = `${items[i].original}`;
  newLink.appendChild(newImg);
  gallery.insertAdjacentElement('beforeend', newLink);
}

gallery.addEventListener('click', e => {
  if (e.target == e.currentTarget) {
    return;
  }
  e.preventDefault();
  lightBoxImage.src = e.target.dataset.source;
  lightBoxImage.alt = e.target.alt;
  lightBox.classList.add('is-open');
});

document.addEventListener('keydown', e => {
  if (!lightBox.classList.contains('is-open')) {
    return;
  }
  switch (e.code) {
    case 'ArrowRight':
      [lightBoxImage.src, lightBoxImage.alt] = choseNextItem(lightBoxImage.src);
      return;
    case 'ArrowLeft':
      [lightBoxImage.src, lightBoxImage.alt] = chosePreviousItem(
        lightBoxImage.src,
      );
      return;
    case 'Escape':
      closeLightBox();
  }
});
