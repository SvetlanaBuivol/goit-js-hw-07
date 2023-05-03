import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', onGalleryElClick);

function createGalleryItemMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
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
    
    
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${e.target.dataset.source}" width="800" height="600" >
    </div>
    `,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', onCloseBtnModal);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', onCloseBtnModal);
            },
        }
    );
    
    function onCloseBtnModal(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        } 
    };

    instance.show()
    
    // const visible = basicLightbox.visible();
   
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', onModalClick);

    function onModalClick(e) {
    instance.close();
    };

};

