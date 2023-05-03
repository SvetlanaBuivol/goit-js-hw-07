import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', onGalleryElClick);

var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});

function createGalleryItemMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        title="${description}"
        />
        </a>
        </li> 
        `
    }).join('');
};

function onGalleryElClick(e) {
    e.preventDefault();
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
};

