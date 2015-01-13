/**
 * Trinity Mirror Travel App
 Copyright 2014 Trinity Mirror
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
	
	$('#trafficntravelvis .road-status-menu > li').addClass('li-active');
	
    $('#trafficntravelvis .road-status-menu').on('click', '.li-active', function(e) {
		console.log("li active clicked");
        $('#trafficntravelvis .road-status-menu > li').addClass('entry-fade');
        $('#trafficntravelvis .road-status-menu > li').removeClass('li-active');

        e.preventDefault();
        var checkElement = $(this).find('.ru-social');
        var thisElement = $(this);
        checkHandle(checkElement, thisElement);

    });

    $('trafficntravelvis .road-status-menu').on('click', '.entry-fade', function(e) {
		console.log("entry fade clicked");
        $('#trafficntravelvis .road-status-menu li').find('.ru-social').slideUp('fast');
        $('#trafficntravelvis .road-status-menu > li').removeClass('li-active');
        $('#trafficntravelvis .road-status-menu > li').removeClass('entry-fade');
        $('#trafficntravelvis .road-status-menu li').find('.ru-area-drop').removeClass('drop-active');
        $('#trafficntravelvis .road-status-menu > li').addClass('li-active');

    });

    function checkHandle(checkElement, thisElement) {

        $('#trafficntravelvis .road-status-menu li').find('.ru-social').slideUp('fast');

        $('#trafficntravelvis .road-status-menu li').find('.ru-area-drop').removeClass('drop-active');

        if ((checkElement.is('.ru-social')) && (checkElement.is(':visible'))) {
            checkElement.slideUp('fast');
            $('#trafficntravelvis .road-status-menu > li').removeClass('entry-fade');
            $('#trafficntravelvis .road-status-menu > li').addClass('li-active');
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


    $('#trafficntravelvis .ru-icon-video, .train-info').click(function(event) {
        event.stopPropagation();
		console.log($(this).attr("data-id"));
        $('.traffic-modal[data-id="'+$(this).attr("data-id")+'"]').fadeIn(500);
		var httpurl = $('.traffic-modal[data-id="'+$(this).attr("data-id")+'"]').find(".img-responsive").attr("data-url");
		$('.traffic-modal[data-id="'+$(this).attr("data-id")+'"]').find(".img-responsive").attr("src", httpurl);
        $('body').addClass('modal-open');
    });

    $('.close-modal').click(function(event) {
        $('.traffic-modal').fadeOut(500);
        $('body').removeClass('modal-open');
    });


/* =====================================================================
 * Facebook App
 * ====================================================================*/

    window.fbAsyncInit = function() {
    FB.init({
      appId      : '403153089840296',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  $('#trafficntravelvis .social-icons .ru-icon-facebook').on('click', function() {
    event.stopPropagation();
        var msgShare = 'This is a test please to see if working';
        FB.ui({
            method: 'feed',
            link: 'http://manchestereveningnews.co.uk/trafficandtravel',
            picture: 'http://i4.manchestereveningnews.co.uk/incoming/article8384081.ece/alternates/s98/ManUtd-ManCity.jpg',
            name: document.title,
            description: msgShare
        }, function(response){});

        return false;
    });

/* =====================================================================
 * Twitter
 * ====================================================================*/

$('#trafficntravelvis .social-icons .ru-icon-twitter').on('click', function() {
    event.stopPropagation();
        var msgShare = 'This is a Traffic and Travel Twitter Test';
        var w = 550;
        var h = 420;
        var winName = 'win'+String(Math.floor(100000*Math.random()));
        var t = Math.floor((screen.height - h)/2 - 50);
        var l = Math.floor((screen.width - w)/2);
        window.open('https://twitter.com/share?related=manchestereveningnews&hashtags=trafficandtravel&text=' + encodeURIComponent(msgShare) + '&url=' + encodeURIComponent(window.location.href), winName, 'width='+w+',height='+h+',top='+t+',left='+l+',scrollbars=yes,resizable=yes,toolbar=no,location=no');
        return false;
    });
});
