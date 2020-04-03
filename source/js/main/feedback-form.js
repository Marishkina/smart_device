'use strict';

(function () {

  var form = document.querySelector('.feedback__form');
  var clientName = form.querySelector('[name=name]');
  var clientPhoneNumber = form.querySelector('[name=phone]');
  var formQuestion = form.querySelector('[name=user-question]');
  var storage = localStorage.getItem('clientName');
  storage = localStorage.getItem('clientNumber');
  storage = localStorage.getItem('formQuestion');

  var isStorageSupport = true;
  storage = '';

  try {
    storage = localStorage.getItem('clentName');
    storage = localStorage.getItem('clientPhoneNumber');
    storage = localStorage.getItem('formQuestion');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storage) {
    clientName.value = storage;
    clientPhoneNumber.focus();
  } else {
    clientName.focus();
  }

  form.addEventListener('submit', function (evt) {
    if (!clientName.value || !clientPhoneNumber.value || !formQuestion.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('clientName', clientName.value);
        localStorage.setItem('clientPhoneNumber', clientPhoneNumber.value);
        localStorage.setItem('formQuestion', formQuestion.value);
      }
    }
  });

  $(document).ready(function () {
    $('#phone-number').mask('+7 (999) 999 99 99');
  });
})();
