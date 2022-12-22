/* global $ , jQuery ,alert */
$(function () {
    
    
	'use strict';
    
    //////////////////////////////////////////////////////// click plus////////////////////////////////////////////////
    
    
    
    $('.products .product i , .items .item i').on('click', function () {
        
        $(this).toggleClass('fa-plus  fa-minus');
        
       $(this).next('p').slideToggle();
       
    });
        
    
    
    
    /////////////////////////////////////////////////////// switch grid || list ///////////////////////////////////////////////
    
    /*
    
    $('.products button ').on('click', function () {
        
        $('.products ').toggleClass('list-view  grid-view');
        
        
        
        
    });
        
    
     $('.items button').on('click', function () {
        
        $(' .items ').toggleClass('list-view  grid-view');
        
        
        
        
    });  */
    
    
    
     $('.products button ').on('click', function () {
         $(this).toggleClass('active  ').siblings().removeClass('active  ');
         $('.products').removeClass('list-view  grid-view').addClass($(this).data('class'));
         
         
     });
    
    
     $('.items button ').on('click', function () {
         $(this).toggleClass('active  ').siblings().removeClass('active  ');
         $('.items').removeClass('list-view  grid-view').addClass($(this).data('class'));
         
         
     });

});