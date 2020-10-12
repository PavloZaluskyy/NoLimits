document.querySelector(".moreInfo").addEventListener("click", () => $('.showHistory').slideToggle(300))

function slowScroll(id){	
    let offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
}	

let toggleMobileMenu = () => $('#myLinks').slideToggle(300)

showPhoto(dataPhoto)

function showPhoto(data){
    let out = '';
    for(let key of data){
        out+= `	<img src="data/photo/${key}" class="imgSlayder" alt="">`
    }
    document.querySelector('.polosa').innerHTML = out
}
let left = 0, right = 0
document.querySelector('.arrowBack').addEventListener('click', ()=>{
    let polosa = document.querySelector('.polosa');
    if(left === 0) left = -3040;
    left +=380
    
    polosa.style.left = left + 'px'
})
document.querySelector('.arrowForwardt').addEventListener('click', ()=>{
    let polosa = document.querySelector('.polosa');
    left-=380;
    if(left < -2660){
        left = 0;
    }
    polosa.style.left = left +'px';
})