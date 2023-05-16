const modal=document.getElementById('modal')
const button=document.querySelector('.login-btn')

button.addEventListener('click', function(){
    modal.classList.toggle('btn-clikc2')
    modal.classList.toggle('btn-clikc')
})