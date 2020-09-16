
(function(window, $){
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
    });

    $('.file').on('change', function(e){
      $(this).find('p').addClass('has-value').text(e.target.files[0].name);
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.slider-nav',
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('[data-tablink]').on('click', function(e){
      e.preventDefault();
      $(this).parents('.tab__nav').find('[data-tablink]').removeClass('active');
      $(this).addClass('active');
      var idx = $(this).index();

      $(this).parents('.tab').find('.tab__panel').hide();
      $(this).parents('.tab').find('.tab__panel').eq(idx).show();
    })
  })
})(window, $)
