"use strict";

$(document).ready(function () {
  var Swidth = document.body.clientWidth;
  var mobile_menu = true;

  if (Swidth < 480) {
    document.querySelector('.mainMenu').style.display = 'none';
  }
});
var toggleShowHistory = true;
document.querySelector(".moreInfo").addEventListener("click", function () {
  toggleShowHistory = !toggleShowHistory;
  !toggleShowHistory ? document.querySelector('.showHistory').style.display = 'inline' : document.querySelector('.showHistory').style.display = 'none';
});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return false;
}

function toggleMobileMenu() {
  $("#myLinks").slideToggle("slow"); // var x = document.getElementById("myLinks");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }
}