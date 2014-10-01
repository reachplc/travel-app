/**
 * Trinity Mirror Travel App
 */

var tmTravelApp = tmTravelApp || {};

/**
 * Open Order Menu
 */

$(document).ready(function() {
    $("#order-menu-btn").click(function(event) {
        $(this).find('span').toggleClass('icon-order-active');
        $(".refresh-menu").toggleClass('refresh-menu-active');
    });

});

/**
 * Roads Order Menu JS
 */

$(document).ready(function() {
    $(".order-items li a ").click(function(event) {
        $(".order-items li a span").attr('class', 'order-icon');
        $(this).find('span').addClass('order-active');
    });

});