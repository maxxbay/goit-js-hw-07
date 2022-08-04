import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const imgCollection = document.querySelector(".gallery");
const imgMarkup = galleryItems
  .map(
    (item) =>
      `<div class ="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" 
    data-source="${item.original}" alt="${item.description}"/>
    </a>
    </div>`
  )
  .join("");

imgCollection.insertAdjacentHTML("afterbegin", imgMarkup);
imgCollection.addEventListener("click", clickedImg);

function clickedImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImg = event.target.dataset.source;
  const modalBox = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">`);
  modalBox.show();

  window.addEventListener("keydown", keyboardEsc);

  function keyboardEsc(event) {
    if (event.code === "Escape") {
      modalBox.close(() => {
        window.removeEventListener("keydown", keyboardEsc);
      });
    }
  }
}
