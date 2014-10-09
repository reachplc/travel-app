/**
 * Trinity Mirror Travel App
 */

/*global $:false */

var tmTravelApp = tmTravelApp || {};

/**
 * Open Order Menu
 */

$(document).ready(function() {
    $('#order-menu-btn').click(function(event) {
        $(this).find('span').toggleClass('icon-order-active');
        $('.refresh-menu').toggleClass('refresh-menu-active');
    });

});

/**
 * Roads Order Menu JS
 */

$(document).ready(function() {
    $('.order-items li a ').click(function(event) {
        $('.order-items li a span').attr('class', 'order-icon');
        $(this).find('span').addClass('order-active');
    });

});


/**
 * Social Media Dropdown JS
 */

$(document).ready(function() {

    $('.road-status-menu > li').click(function(event) {

        event.preventDefault();

        var checkElement = $(this).find('.ru-social');
        console.log(checkElement);

        $('.road-status-menu li').find('.ru-social').slideUp('fast');

        $('.road-status-menu li').find('.ru-area-drop').removeClass('drop-active');

        if ((checkElement.is('.ru-social')) && (checkElement.is(':visible'))) {
            console.log('not visible')
            checkElement.slideUp('fast');

        }

        if ((checkElement.is('.ru-social')) && (!checkElement.is(':visible'))) {
            console.log('visible')
            checkElement.slideDown('fast');
            $(this).closest('li').find('.ru-area-drop').addClass('drop-active');

        }

        /*

        if ($(this).find('.ru-social').hasClass('ru-social-active')) {

            $(this).find('.ru-social').removeClass('ru-social-active');

            $(this).find('.ru-area-drop').removeClass('drop-active');

        } else {

            $('.road-status-menu li').find('.ru-area-drop').removeClass('drop-active');

            $('.road-status-menu li').find('.ru-social').removeClass('ru-social-active');

            $(this).closest('li').find('.ru-social').addClass('ru-social-active');

            $(this).closest('li').find('.ru-area-drop').addClass('drop-active');

        } */

    });
});