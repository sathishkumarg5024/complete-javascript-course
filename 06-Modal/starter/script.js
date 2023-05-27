'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// opens the modal
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// closes the modal
const closedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// iterating over the nodelist for showing the modal
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModal);
}
//closing modal when clicked the  button
btnCloseModal.addEventListener('click', closedModal);

// closing modal when clicked the overlay
overlay.addEventListener('click', closedModal);

// esc keypress
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closedModal();
  }
});
