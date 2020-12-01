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

$('.owl-mapas').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    items: 1
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

 // MAPAS

$("#mapa2, #mapa3, #mapa4").hide();

$("#for-mapa1").on( "click", function() {
    $(this).addClass('current-mapa');
    $("#for-mapa2, #for-mapa3, #for-mapa4").removeClass('current-mapa');
    $("#mapa2, #mapa3, #mapa4").hide();
    $("#mapa1").fadeIn();
});

$("#for-mapa2").on( "click", function() {
    $(this).addClass('current-mapa');
    $("#for-mapa1, #for-mapa3, #for-mapa4").removeClass('current-mapa');
    $("#mapa1, #mapa3, #mapa4").hide();
    $("#mapa2").fadeIn();
});

$("#for-mapa3").on( "click", function() {
    $(this).addClass('current-mapa');
    $("#for-mapa2, #for-mapa1, #for-mapa4").removeClass('current-mapa');
    $("#mapa2, #mapa1, #mapa4").hide();
    $("#mapa3").fadeIn();
});

$("#for-mapa4").on( "click", function() {
    $(this).addClass('current-mapa');
    $("#for-mapa1, #for-mapa3, #for-mapa2").removeClass('current-mapa');
    $("#mapa1, #mapa3, #mapa2").hide();
    $("#mapa4").fadeIn();
});