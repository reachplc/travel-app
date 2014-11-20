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



/**
 * Roads Order Menu JS
 */


    $('.order-items > li ').click(function(event) {
        $('.order-items > li > span').attr('class', 'order-icon');
        $(this).find('span').addClass('order-active');
    });




/** ===================================================================
 * Social Media Roads Dropdown JS
 =================================================================== */


	console.log("ready!");
	
	console.log($(".li-active"));
	
	
	
    $('.road-status-menu').on('click', '.li-active', function(e) {
		console.log("li active clicked");
        $('.road-status-menu > li').addClass('entry-fade');
        $('.road-status-menu > li').removeClass('li-active');

        e.preventDefault();
        var checkElement = $(this).find('.ru-social');
        var thisElement = $(this);
        checkHandle(checkElement, thisElement);

    });

    $('.road-status-menu').on('click', '.entry-fade', function(e) {
		console.log("entry fade clicked clicked");
        $('.road-status-menu li').find('.ru-social').slideUp('fast');
        $('.road-status-menu > li').removeClass('li-active');
        $('.road-status-menu > li').removeClass('entry-fade');
        $('.road-status-menu li').find('.ru-area-drop').removeClass('drop-active');
        $('.road-status-menu > li').addClass('li-active');

    });

    function checkHandle(checkElement, thisElement) {

        $('.road-status-menu li').find('.ru-social').slideUp('fast');

        $('.road-status-menu li').find('.ru-area-drop').removeClass('drop-active');

        if ((checkElement.is('.ru-social')) && (checkElement.is(':visible'))) {
            checkElement.slideUp('fast');
            $('.road-status-menu > li').removeClass('entry-fade');
            $('.road-status-menu > li').addClass('li-active');
        }

        if ((checkElement.is('.ru-social')) && (!checkElement.is(':visible'))) {
            checkElement.slideDown('fast');
            $(thisElement).closest('li').find('.ru-area-drop').addClass('drop-active');
            $(thisElement).closest('li').removeClass('entry-fade');
            $(thisElement).closest('li').addClass('li-active');

        }
    }



/* =====================================================================
 * Camera Modal
 * ====================================================================*/


    $('.ru-icon-video, .train-info').click(function(event) {
		console.log($(this).attr("data-id"));
        $('.traffic-modal[data-id="'+$(this).attr("data-id")+'"]').fadeIn(500);
		var httpurl = $('.traffic-modal[data-id="'+$(this).attr("data-id")+'"]').find(".img-responsive").attr("data-url");
		$('.traffic-modal[data-id="'+$(this).attr("data-id")+'"]').find(".img-responsive").attr("src", httpurl);
        $('body').addClass('modal-open');
        event.stopPropagation();

    });

    $('.close-modal').click(function(event) {
        $('.traffic-modal').fadeOut(500);
        $('body').removeClass('modal-open');
    });

});