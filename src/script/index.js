document.querySelector(".moreInfo").addEventListener("click", () => {
  $('.showHistory').slideToggle(300)
  })

function slowScroll(id){	
    let offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
}	

function toggleMobileMenu() {
  $('#myLinks').slideToggle(300)
}



