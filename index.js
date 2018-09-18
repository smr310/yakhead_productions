

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



//Typewriter effect in hero section
var i = 0;
var txt = 'Full Stack Web Developer';
var speed = 85;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("full-stack-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        $("#full-stack-text").append("<span id='cursor'>&nbsp;|</span>")
        setInterval('cursorAnimation()', 10);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'slow', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}


//Github & Linkedin clickhandlers 
$(".hero-github").click(function (e) {
    e.preventDefault();
    window.open('https://github.com/smr310', '_blank');
})

$(".hero-linkedin").click(function (e) {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/steve-romm/', '_blank');
})




// Project Image Click Handlers
$("#travelBak-img").click(function (e) {
    e.preventDefault();
    console.log('clicked')
    window.open('https://fathomless-brook-48599.herokuapp.com/', '_blank');
})

$("#trackdays-img").click(function (e) {
    e.preventDefault();
    console.log('clicked')
    window.open('https://obscure-mountain-61250.herokuapp.com/index.html', '_blank');
})

$("#goodscenes-img").click(function (e) {
    e.preventDefault();
    console.log('clicked')
    window.open('https://smr310.github.io/good-scenes/', '_blank');
})


//Hide navbar at start and show when user scrolls down
$(function () {
    'use strict';
    var navBar = $('nav'); //Targets nav element
    var myWindow = $(window);

    navBar.hide();

    myWindow.on('scroll', function () {
        if ($(this).scrollTop() > 400) { //height from top to trigger slideDown
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


//Change arrow color
$(setInterval(function () {

    console.log('interval function is running')
    var arrowColor = $('.fa-chevron-down').css('color');

    console.log(arrowColor)

    if (arrowColor === 'rgb(255, 255, 255)') {
        $('.fa-chevron-down').css({ 'color': 'rgb(160, 160, 160)', 'text-shadow': 'none' })
    } else {
        $('.fa-chevron-down').css({ 'color': 'rgb(255, 255, 255)', 'text-shadow': '0px 0px 8px white' })
    }
}, 1400))



//on page load do this
$(function () {
    navClickHandler();
    typeWriter();
})