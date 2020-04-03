'use strict';

(function () {
  $(document).ready(function () {
    $('.footer__accordion > .footer__accordion-list > .sub > .footer__accordion-link').click(function () {
      $(this).toggleClass('active').next().slideToggle();
      $('.footer__accordion-link').not(this).removeClass('active').next().slideUp();
    });
  });
})();
