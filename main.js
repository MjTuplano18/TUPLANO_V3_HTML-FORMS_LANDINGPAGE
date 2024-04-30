let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

$(document).ready(function(){
    $('.img-carousel').slick({
        dots: true, // Show dots navigation
        infinite: true, // Enable infinite scrolling
        autoplay: true, // Autoplay the carousel
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1 // Number of slides to scroll at a time
    });
});
