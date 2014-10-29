/**
 * Trinity Mirror Travel App
 Copyright 2014 Trinity Mirrot
 */

/*global $:false */

var tmTravelApp = tmTravelApp || {};

/** ===================================================================
 * Open Order Menu
 =================================================================== */

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
    $('.order-items > li ').click(function(event) {
        $('.order-items > li > span').attr('class', 'order-icon');
        $(this).find('span').addClass('order-active');
    });

});


/** ===================================================================
 * Social Media Roads Dropdown JS
 =================================================================== */

$(document).ready(function(e) {

    $('.road-status-menu > li').addClass("li-active");
    $('.road-status-menu').on('click', '.li-active', function(e) {
        $('.road-status-menu > li').addClass("entry-fade");
        $('.road-status-menu > li').removeClass("li-active");

        e.preventDefault();
        var checkElement = $(this).find('.ru-social');
        var thisElement = $(this);
        checkHandle(checkElement, thisElement);

    });

    $('.road-status-menu').on('click', '.entry-fade', function(e) {
        $('.road-status-menu li').find('.ru-social').slideUp('fast');
        $('.road-status-menu > li').removeClass("li-active");
        $('.road-status-menu > li').removeClass("entry-fade");
        $('.road-status-menu li').find('.ru-area-drop').removeClass('drop-active');
        $('.road-status-menu > li').addClass("li-active");


    });

    function checkHandle(checkElement, thisElement) {

        $('.road-status-menu li').find('.ru-social').slideUp('fast');

        $('.road-status-menu li').find('.ru-area-drop').removeClass('drop-active');

        if ((checkElement.is('.ru-social')) && (checkElement.is(':visible'))) {
            checkElement.slideUp('fast');
            $('.road-status-menu > li').removeClass("entry-fade");
            $('.road-status-menu > li').addClass("li-active");
        }

        if ((checkElement.is('.ru-social')) && (!checkElement.is(':visible'))) {
            checkElement.slideDown('fast');
            $(thisElement).closest('li').find('.ru-area-drop').addClass('drop-active');
            $(thisElement).closest('li').removeClass("entry-fade");
            $(thisElement).closest('li').addClass("li-active");


        }


    };
});

/** ===================================================================
 * Social Media Train Dropdown JS
 =================================================================== */

$(document).ready(function() {

    $('.train-info').addClass("li-active");
    $('#train-news').on('click', '.li-active', function(e) {
        $('.train-info').addClass("entry-fade");
        $('.train-info').removeClass("li-active");

        e.preventDefault();
        var checkElements = $(this).next('tr');
        console.log(checkElements)
        var thisElements = $(this);
        checkHandlers(checkElements, thisElements);
    });

    function checkHandlers(checkElements, thisElements) {

        $('.train-info').closest('tr').find('.train-social').slideUp('fast');
        $('.train-info').find('.trains-drop').removeClass('drop-active');

        if ((checkElements.is('.train-social')) && (checkElements.is(':visible'))) {
            checkElements.slideUp('fast');
            $('.train-info').removeClass("entry-fade");
            $('.train-info').addClass("li-active");
        }

        if ((checkElements.is('.train-social')) && (!checkElements.is(':visible'))) {
            checkElements.slideDown('fast');
            $(thisElements).find('.trains-drop').addClass('drop-active');
            $(thisElements).removeClass("entry-fade");
            $(thisElements).addClass("li-active");
        }
    };
});


/* =====================================================================
 * Camera Modal
 * ====================================================================*/

$(document).ready(function() {
    $('.ru-icon-video').click(function(event) {
        $('.roads-modal').fadeIn(500);
        $('body').addClass('modal-open')
        event.stopPropagation();

    });

    $('.close-modal').click(function(event) {
        $('.roads-modal').fadeOut(500);
        $('body').removeClass('modal-open')
    });

});