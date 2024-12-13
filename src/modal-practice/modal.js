const openButton = document.querySelector('#open-modal');
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('#modal');

openButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
})
window. addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
})

function openModal(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}