const modalBtn = document.querySelector('.modal-button')
const modalBg = document.querySelector('.modal-bg')

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active')
})