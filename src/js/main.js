//CAROUSEL HOME

$('.owl-home').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
})

$('.owl-expertise').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$('.owl-clientes').owlCarousel({
    loop:true,
    margin: 20,
    nav: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
$('.owl-biometria').owlCarousel({
    loop:true,
    margin: 20,
    nav: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//PRELOADER

window.onload = function(){
    $("#loader").fadeOut(350,function(){$(this).remove()});
};

// HEADER FIXED

$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
       $('.header').addClass('fixed-header');
    }
    else {
       $('.header').removeClass('fixed-header');
    }
});

// NAV BAR


$( "#toggle" ).click(function() {
    $('.navbar-only').toggleClass("navbar-mobile-opened");
    $(this).toggleClass("toggle-opened");
    $('.navbar-only ul li').toggleClass("animated fadeInDown");
});

//NAV BAR MENU


$('.navbar-only ul > li > a').click(function() {
    if($(this).closest("li").children("ul").length) {
        $(".navbar-only .sub-menu").slideToggle();
    }
 });