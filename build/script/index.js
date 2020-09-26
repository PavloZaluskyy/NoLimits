"use strict";

document.querySelector(".moreInfo").addEventListener("click", function () {
  $('.showHistory').slideToggle(300);
});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return false;
}

function toggleMobileMenu() {
  $('#myLinks').slideToggle(300);
}