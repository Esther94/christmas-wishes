const modal= document.querySelector('#my-modal');
const modalbutton = document.querySelector('#modal-btn');
const closeIcon = document.querySelector('.close');

modalbutton.addEventListener('click', openModal);
closeIcon.addEventListener('click', closeModal);

function openModal() {
 modal.style.display ='block';
 }



function closeModal() {
 modal.style.display ='none';
 }