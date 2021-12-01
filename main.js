const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/*Testimonials slider */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    
});

/*Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    `,
    { interval: 100 }
  )

/* back to top button */
function backToTop(){
    const BackToTopButton = document.querySelector('.back-to-top')

    if (this.scrollY >= 560) {
        BackToTopButton.classList.add('show')
    } else {
        BackToTopButton.classList.remove('show')
    }
}

/* When scrolls */
window.addEventListener('scroll', function(){    
    changeHeaderWhenScroll()
    backToTop()
})