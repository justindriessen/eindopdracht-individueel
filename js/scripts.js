var player = videojs("player1","player2","player3","player4","player5");
var btn = $('.switch');
var playBtn = $('.play');
var rewindBtn = $('.rewind');
var checkBtn = $('.check');

$( document ).ready(function() {
    $( "#accordion" ).accordion({
        animate: 1000
    });
});

$("video").each(function(){
    $(this).css('width', '1080px');
    $(this).css('height', '620px');
});

playBtn.click( function(){
    if(!player.paused()){
    player.pause();    
    }else{
        player.play();
    }
});

rewindBtn.click( function(){
    var time = player.currentTime();
    player.currentTime(time - 10);
});

checkBtn.click( function(){
    $(this).animate({opacity: 0},500);
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
        $('.ui-accordion-header').addClass('darkAc'); 
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
        $('.ui-accordion-header').removeClass('darkAc'); 
        $('#support').removeClass('dark'); 
        $('.persoon h3').removeClass('dark');
        $('.mail').removeClass('darkBtn'); 
        $(".ball").animate({'left': "0px"}, 500);
    }
});

