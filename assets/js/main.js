'use strict';
/*--------------------------------------------------
 BACK TO TOP
 ---------------------------------------------------*/

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
    scroll_top_duration = 0,
  //grab the "back to top" link
    $back_to_top = $('.backtotop');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('fade-out');
    }
  });

  //smooth scroll to top
  //$back_to_top.on('click', function(event){
  //  event.preventDefault();
  //  $('body,html').animate({
  //      scrollTop: 0 ,
  //    }, scroll_top_duration
  //  );
  //});

});

/*--------------------------------------------------
 HEADER
 ---------------------------------------------------*/

jQuery(document).ready(function($){
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var MQL = $(window).width() / parseFloat($("body").css("font-size"));

  //responsive navigation slide-in effect
  if($(window).width() > MQL) {
    var headerHeight = $('.header').height();
    $(window).on('scroll',
      {
        previousTop: 0
      },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop ) {
          //if scrolling up...
          if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
            $('.header').addClass('is-visible');
          } else {
            $('.header').removeClass('is-visible is-fixed');
          }
        } else {
          //if scrolling down...
          $('.header').addClass('is-visible');
          $('.header').addClass('is-fixed');
          //if( currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

});

/*--------------------------------------------------
 NAVIGATION
 ---------------------------------------------------*/

jQuery(document).ready(function($){


  //open/close responsive navigation
  $('.responsive-nav-trigger').on('click', function(){
    $('.menu-icon').toggleClass('is-clicked');
    $('.header').toggleClass('menu-is-open');

    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( $('.responsive-nav').hasClass('is-visible') ) {
      $('.responsive-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.responsive-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('body').addClass('overflow-hidden');
      });
    }
  });
});


jQuery(document).ready(function($){
    $('#copyright-year').text((new Date()).getFullYear());console.log((new Date()).getFullYear())

    // Dynamic Welcome message
    var welcomeText = ["Welcome", "Hola", "Bonjour", "Guten Tag", "Goddag", "Namaste"];
    var counter = 0;
    var interval = setInterval(change, 3000);
    function change() {
        $('#hero-message').text(welcomeText[counter]);
        typeWriter(welcomeText[counter]);
        counter++;
        if (counter >= welcomeText.length) {
            counter = 0;
            //clearInterval(interval);
        }
    }

    function typeWriter(txt) {
        if (i < txt.length) {
            $('#hero-message').text(txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed)
        }
    }
             
        
});

function scrollTo(element) {
  $('html,body').animate({scrollTop: $(element).offset().top-$('.header').height()}, 0)
}




$(function() {
  $('.oembed-video .thumb, .oembed-video .play').click(function() {
    var wrapper = $(this).parent();
    var embed = wrapper.find('iframe, object');
    embed.attr('src', embed.attr('data-src'));
    embed.css({'display' : 'block'});
    wrapper.find('.play, .thumb').remove();
  });
});

