let count = 1,
	togglePlay = true;
const audio = new Audio();
renderSongs();
document.querySelector(".iconPrevious").addEventListener('click', () => {prev(); showPreview(); play()});
document.querySelector(".iconNext").addEventListener('click', () => {next(); showPreview(); play()});
document.querySelector(".iconPlay").addEventListener('click', ()=>{
	togglePlay = !togglePlay;
	if(togglePlay !==true){
		removeClass(".playOrPause", ".iconPlay");
		document.querySelector(`.playOrPause`).classList.add("iconPause");
		play();
	}else{
		removeClass(".playOrPause", ".iconPause");
		document.querySelector(`.playOrPause`).classList.add("iconPlay");
		pause();
	}

});
document.querySelector(".m_playlist").addEventListener('click', (event) => {
	
	count = +event.target.dataset.songid + 1;
	prev(); showPreview(); play()

});

function renderSongs(){
	let renderNameSong = "",
		renderImg = document.querySelector('.preview');
	for(let key of dataSongs){
		if(key.id === 1){
		renderImg.style.background = `url(/data/player/img/${key.urlImg})`;
		renderNameSong += `<li data-songId="${key.id}" class="active songs">${key.nameSong}</li>`;
		
		}
		else renderNameSong += `<li data-songId="${key.id}" class="songs">${key.nameSong}</li>`;
	}
	document.querySelector('.m_playlist').innerHTML = renderNameSong;
	audio.src = `../data/player/songs/${dataSongs[0].urlSong}`;
}

function removeClass(yourSelectClass, removeYourClass){
	let selectClass = document.querySelector(yourSelectClass);
	selectClass.classList.remove(removeYourClass);
}



function play(){
	audio.play();
	setInterval(()=>{

		document.querySelector('#time').innerText = `${Math.floor(audio.currentTime / 60)} : ${(audio.currentTime % 60).toFixed(0)} `;
	}, 1000)
}
function pause(){
	audio.pause();
}

function showPreview(){
	const renderImg = document.querySelector('.preview');
	renderImg.style.background = `url(/data/player/img/${dataSongs[count-1].urlImg})`;
}

function next() {
	removeClass("li.active", "active");
	if(count < dataSongs.length){
		count++;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	}else{
		count = 1;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	}
	audio.src = `../data/player/songs/${dataSongs[count-1].urlSong}`;
	togglePlay = false;
}
function prev() {
	removeClass("li.active","active");
	if(count > 1){
		count--;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	}else{
		count = dataSongs.length;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	}
	togglePlay = false;
	audio.src = `../data/player/songs/${dataSongs[count-1].urlSong}`;
}


