const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* CHANGE BACKGROUND HEADER */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SHOW SCROLL UP */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive)


const linkFeatured = document.querySelectorAll('.featured_item');

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured));

const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration: 2500,
    delay : 400,
})

sr.reveal(`.home_title, .popular_container, .features_img, .featured_filters`)
sr.reveal(`.home_subtitle`, {delay: 600})
sr.reveal(`.home_elec`, {delay:700})
sr.reveal(`.home_img`, {delay:850})
sr.reveal(`.home_car-data`, {delay: 920, interval:100, origin:'bottom'})
sr.reveal(`.home_btn`, {delay: 100, origin:'bottom'})
sr.reveal(`.about_group, .features_card-1, .offer_data`, {origin:'left'})
sr.reveal(` .features_card-3`, {origin:'left', delay:700})
sr.reveal(`.about_data, .features_card-2, .offer_img`, {origin:'rigth'})
sr.reveal(`.about_card`, {origin:'bottom'})
sr.reveal(`.featured_card, .logos_content, .footer_content`, {interval:100})


// let swiperPopular = new Swiper(".popular_container", {
//     loop: true,
//     spaceBetween:24,
//     slidesPerView:'auto',
//     grabCursor:true,

//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets:true,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 5,
//           spaceBetween: 50,
//         },
//     },
//   });