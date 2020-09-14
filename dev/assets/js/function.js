
(function(window, $){
  $.fn.delay = function(time, callback){
    jQuery.fx.step.delay = function(){};
    return this.animate({delay:1}, time, callback);
  }

  $(function(){
    $(window).scroll(function(){
      var h = $(this).scrollTop();
      var isScrolled = h > 0;
      if(isScrolled) {
        $('body').addClass('scrolled');
      } else {
        $('body').removeClass('scrolled');
      }

      if( h > 500 ) {
        $('.quick').addClass('fixed')
      } else {
        $('.quick').removeClass('fixed')
      }
    });

    $('.visual__content').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $('.visual__notice-slide').slick({
      dots: false,
      arrows: false,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.modal__body').add('.modal__header').on('click', function(e){
      e.stopPropagation();
    });
    $('.modal__close').on('click', function(){
      $('body').css('overflow', 'auto');
      $(this).parents('.modal').removeClass('js-active');
    })
    $('.modal').on('click', function(){
      $('body').css('overflow', 'auto');
      $(this).removeClass('js-active');
    })
  })
})(window, $)
