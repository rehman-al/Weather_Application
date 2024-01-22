$(document).ready(function () {
    // for nav bar 
    $(window).on('scroll', function () {
        // console.log(scrollY)
        if (scrollY > 80) {
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
    });

    // for nav toggle 
    $("#toggle").click(function () {
        $('nav').toggleClass('jq-toggle');
    });

    $('.float').click(function () {
        $("footer .message").toggle(function () {
            $(this).css('bottom', 0);
            $(this).css("right", 0);
        })
    });

    // nav bar script 
    $("#weather_link, #weather_link2").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        window.location.href = '/weather';
    });

    $("#home_link").click(function (e) {
        window.location.href = '/home';

    });

});