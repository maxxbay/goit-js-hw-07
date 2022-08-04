import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

const imgCollection = document.querySelector(".gallery");
const imgMarkup = galleryItems
  .map(
    (item) =>
      `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`
  )
  .join("");

imgCollection.insertAdjacentHTML("afterbegin", imgMarkup);

new SimpleLightbox(".gallery a", {
  //   captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
