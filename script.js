$(document).ready(function () {
    var slidheader = $("#slidheader");
    var cardblock = $("#cardblock");
    var studioslider = $("#studioslider");
    var profileslider = $("#profileslider");

    slidheader.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        items: 1
    })

    cardblock.owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
                loop: false
            }
        }
    })

    studioslider.owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        navText: [
            "<img src='images/shape_two.png' class='img-fluid h-100 object-fit-cover' alt=''>",
            "<img src='images/shape_one.png' class='img-fluid h-100 object-fit-cover' alt=''>"
        ],
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            600: {
                nav: true,
                autoplay: false,
            }
        }
    })

    profileslider.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        items: 1
    })


});


AOS.init();