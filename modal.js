const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const spanCloseModal = document.querySelector('.close-modal')
const spanOpenModal = document.querySelectorAll('.show-modal')

const closeModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const openModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
for (let i = 0; i < spanOpenModal.length; i++) spanOpenModal[i].addEventListener('click',closeModal)

spanCloseModal.addEventListener('click',openModal)
overlay.addEventListener('click',openModal)

document.addEventListener('keydown',function(event){
  if(event.key==='-' && !modal.classList.contains('hidden')){
    openModal();
    console.log('-');
  }else if(event.key==="+" && modal.classList.contains('hidden')){
    closeModal();
    console.log('adsd');
    
  }
})
