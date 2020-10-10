"use strict";

document.querySelector(".moreInfo").addEventListener("click", function () {
  return $('.showHistory').slideToggle(300);
});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return false;
}

var toggleMobileMenu = function toggleMobileMenu() {
  return $('#myLinks').slideToggle(300);
};

function createElementImageForSlider(url) {}