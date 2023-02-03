//reactive navbar code
const hamToggle = document.getElementsByClassName('hamburgerMenu')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

hamToggle.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
