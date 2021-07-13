burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rnav = document.querySelector('.rnav')
navlist = document.querySelector('.nav-list')


burger.addEventListener('click' , ()=>{
    navbar.classList.toggle('nav-h-resp')
    rnav.classList.toggle('v-class-nav')
    navlist.classList.toggle('v-class-nav')
    
})


