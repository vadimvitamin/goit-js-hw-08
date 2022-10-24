// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', getGalleryListMarkup(galleryItems));
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);

function getGalleryItemMarkup({ preview, original, description }) {
  return `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
  `;
}

function getGalleryListMarkup(array) {
  return array.map(it => getGalleryItemMarkup(it)).join('');
}
