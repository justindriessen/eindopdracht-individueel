var player = videojs("player1","player2","player3","player4","player5");
var btn = $('.switch');
var playBtn = $('.play');
var rewindBtn = $('.rewind');
var checkBtn = $('.check');
var hamBtn = $('.hamburger');

$( document ).ready(function() {
    $( "#accordion" ).accordion({
        animate: 1000,
        heightStyle: "content"
    });
});

$("video, .play, .rewind, .check").hover(function(){
    playBtn.css("opacity", "1");
    rewindBtn.css("opacity", "1");
    checkBtn.css("opacity", "1");
    }, function(){
    playBtn.css("opacity", "0");
    rewindBtn.css("opacity", "0");
    checkBtn.css("opacity", "0");
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
    $('.vinkje1, .vinkje2, .vinkje3, .vinkje4, .vinkje5').animate({opacity: 1},500);
    $('.bgModal').css('display', 'flex');
    $('.like').animate({width: '100px'},500);
});

$('.close').click (function() {
    $('.bgModal').css('display', 'none');
    $('.like').animate({width: '10px'},500);
});

hamBtn.click( function(){
    if($('.nav-links').hasClass('closed')){
        $('.nav-links').css('display', 'flex');
        $('.nav-links').removeClass('closed');
    } else {
        $('.nav-links').css('display', 'none');
        $('.nav-links').addClass('closed');
    }
});

btn.click( function(){
    if(!$('#footer').hasClass('dark')){
        $('#footer').addClass('dark');
        $('header').addClass('dark');
        $('.line').addClass('dark');
        $('.nav-links').addClass('dark');
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

