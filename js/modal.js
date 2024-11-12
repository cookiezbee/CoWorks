const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');

function openModal() {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
}

openModalBtns.forEach(function(item) {
    item.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', closeModal);

modalBody.addEventListener('click', function(e) {
    e.stopPropagation();
});

document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        closeModal();
    }
});