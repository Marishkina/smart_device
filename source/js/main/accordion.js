'use strict';

(function () {
  $(window).resize(function () {
    var width = $('body').innerWidth();
    if (width > 767) {
      $('.sub__list').css('display', 'flex');
    } else {
      $('.sub__list').css('display', 'none');
    }
  });

  $(document).ready(function () {
    $('.footer__accordion > .footer__accordion-list > .sub > .footer__accordion-link').click(function () {
      $(this).toggleClass('active').next().slideToggle();
      $('.footer__accordion-link').not(this).removeClass('active').next().slideUp();
    });
  });
})();
