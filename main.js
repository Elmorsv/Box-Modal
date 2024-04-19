"use strict";
const modalBtns = document.querySelectorAll(".modal-btn");
const modal = document.querySelectorAll(".read-more-card");
const overlay = document.querySelector(".overlay");
modalBtns.forEach((modalBtnsElement, i) => {
  modalBtnsElement.addEventListener("click", () => {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
overlay.addEventListener("click", () => {
  modalBtns.forEach((modalBtnsElement, i) => {
    modal[i].classList.add("hidden");
  });
  overlay.classList.add("hidden");
});
