import { galleryItems } from './gallery-items.js'
// Change code below this line

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый
//    код из первого задания.
// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла:
//    simple-lightbox.min.js и simple-lightbox.min.css.
// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с
//    документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись
//    будет снизу и появляется через 250 миллисекунд после открытия изображения.

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryCardsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}" />
        </a>
      </div>
    `
    })
    .join('')
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
})
