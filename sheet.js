const modal= document.querySelector('#d-modal');
const modalbutton = document.querySelector('#modal-btn');
const closeIcon = document.querySelector('.close');

closeIcon.addEventListener('click', closeModal);
modalbutton.addEventListener('click', openModal);


function openModal() {
modal.style.display ='block';
 }


 function closeModal() {
 modal.style.display ='none';
 }