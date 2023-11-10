var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links')
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
} 

for(i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click',menuItemClicked);
}

function menuItemClicked(){
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll',scrollFunction);

function scrollFunction(){
    if(window.scrollY > 60){
        homeSection.classList.add('active');
    
    }else{
        homeSection.classList.remove('active');
    }

}


var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.item',
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
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// note: some links i am supposed to add in html from cdnjs 1:51:30s