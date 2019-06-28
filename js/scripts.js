var player = videojs('player');
var btn = $('.switch');


$( document ).ready(function() {
    $( "#accordion" ).accordion({
        animate: 1000
    });
});

btn.click( function(){
    if(!$('#footer').hasClass('dark')){
        $('#footer').addClass('dark');
        $('header').addClass('dark');
        $('body').addClass('dark');
        $('#vids').css('background-color','black');
        $('.pad').addClass('dark');
        $('#accordion').addClass('dark'); 
        $('.ui-accordion-header-active').addClass('darkAc'); 
        $('#support').addClass('dark'); 
        $('.persoon h3').addClass('dark');
        $('.mail').addClass('darkBtn');
        $(".ball").animate({'left': "-40px"}, 500); 
    }else{
        $('#footer').removeClass('dark');
        $('header').removeClass('dark');
        $('body').removeClass('dark');
        $('#vids').css('background-color','white');
        $('.pad').removeClass('dark');
        $('#accordion').removeClass('dark'); 
        $('.ui-accordion-header-active').removeClass('darkAc'); 
        $('#support').removeClass('dark'); 
        $('.persoon h3').removeClass('dark');
        $('.mail').removeClass('darkBtn'); 
        $(".ball").animate({'left': "0px"}, 500);
    }
});

