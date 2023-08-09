const overlay = document.querySelector('#overlay');
const toggleOverlayClose = document.querySelector('#close-overlay');
const toggleOverlayOpen = document.querySelector('#burger');

toggleOverlayOpen.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay');
  overlay.classList.toggle('hide-overlay');
});

toggleOverlayClose.addEventListener('click', () => {
  overlay.classList.toggle('hide-overlay');
  overlay.classList.toggle('show-overlay');
});

