//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function () {

var menu = $('.nav-tabs');
var origOffsetY = menu.offset().top;

function scroll() {
    if ($(window).scrollTop() > origOffsetY) {
        $('.nav-tabs').addClass('navbar-fixed-top');
        $('.content').addClass('menu-padding');
    } else {
        $('.nav-tabs').removeClass('navbar-fixed-top');
        $('.content').removeClass('menu-padding');
    }

   }

  document.onscroll = scroll;

});