var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links')
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
} 


//typed.js link at cdn.js

var typingEffect = new Typed(".multiText",{
    strings:["Designer", "Coder", "Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
})


for(i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click',menuItemClicked);
}

function menuItemClicked(){
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll',scrollFunction);
window.addEventListener('load',scrollFunction);

function scrollFunction(){
    if(window.scrollY > 60){
        homeSection.classList.add('active');
    
    }else{
        homeSection.classList.remove('active');
    }

}

// slider js start

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


next.addEventListener('click',function(){
    let items = document.querySelectorAll('.items')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.items')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

// slider js end

var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.items',
    layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value
    })
})

 
$('.gallery').magnificPopup({
    delegate: '.overlay a',
    type: 'image',
    gallery:{
        enabled: true
    }
})

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:true
        },
        768:{
            items:2
        }
    }
})


