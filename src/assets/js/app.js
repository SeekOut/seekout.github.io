// ------------------------------------------

// External Libraries

// ------------------------------------------

jQuery(function($){
  $('.slider--testimonials').slick({
    'fade': true,
    'zIndex': 200,
    'prevArrow': '<img src="assets/images/svg/ui-nav-pag.svg"/>',
    'nextArrow': '<img src="assets/images/svg/ui-nav-pag.svg"/>',
    'arrows': true,
    'dots': true,
    'responsive': [
      {
        'breakpoint': 767,
        'settings': {
          'arrows': false,
          'dots': true
        }
      }
    ]
  });

  /*
    GLOBAL smooth scroll
  */

  $('[href="#anchor--newsletter"]').click(function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, 'swing', function(){
      $('.mailform__input--text').focus();
    });
    return false;
  });

  $(".popup-link").click(function(){
    var window_size = this.getAttribute('data-popup-size');
    window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
    return false;
  });
});