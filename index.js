
//Handle nav click events
function navClickHandler() {
    $('.nav-button').on('click', (e) => {
        e.preventDefault();
        console.log('clicked!')
    })
}

$(".gallery-nav-button").click(function (e) {
    e.preventDefault();
    window.open('https://www.instagram.com/yakheadpro/', '_blank');
})


//Hide navbar at start and show when user scrolls down
$(function () {
    'use strict';
    var navBar = $('nav'); //Targets nav element
    var myWindow = $(window);

    navBar.hide();

    myWindow.on('scroll', function () {
        if ($(this).scrollTop() > 200) { //height from top to trigger slideDown
            navBar.slideDown();
        }
        else if ($(this).scrollTop() < 50) { //height from top to hide navbar
            navBar.slideUp();
        }
    });
});



//Nav Item Click Scroll to Section
$("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */);
});



//on page load do this
$(function () {
    navClickHandler();
    typeWriter();
})