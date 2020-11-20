$( document ).ready(function() {

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
    });

    // ANIMAZIONE CLICK NAVBAR
    $(".hero-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#hero-section").offset().top
        }, 2000);
    });
    $(".works-menu").click(function() {
        console.log("DENTRO");
        $('html, body').animate({
            scrollTop: $("#works-section").offset().top
        }, 2000);
    });
    $(".about-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutme-section").offset().top
        }, 2000);
    });
    $(".contacts-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#contacts-section").offset().top
        }, 2000);
    });
});