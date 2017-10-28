'use strict';

$(function() {
  console.log('test');
//    $('#first').hide(1000).show(3000);
    
//    $('#first').fadeOut(1000).fadeIn(3000);
    
//    $('#first').slideDown(1000).slideUp(3000);
    
    function callbackZwrotny() {
        console.log('Zakończono pierwszą animację. Uwaga! Startuje druga!');
        $('#first').animate({
            'font-size' : "1em",
            'margin-left': '0px'}, 3000);
        
    } ;
//    callbackZwrotny();
    
    $('#first').animate({'font-size' : '4em', 'margin-left': '250px', 'background-color' : 'yellow'}, 3000, callbackZwrotny);
    
  })