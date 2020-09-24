let count = 1,
	togglePlay = true;
const audio = new Audio();

renderSongs();
document.querySelector(".iconPrevious").addEventListener('click', () => { prev(); showPreview(); play() });
document.querySelector(".iconNext").addEventListener('click', () => { next(); showPreview(); play() });
document.querySelector(".iconPlay").addEventListener('click', () => {
	togglePlay = !togglePlay;
	if (togglePlay !== true) {
		removeClass(".playOrPause", ".iconPlay");
		document.querySelector(`.playOrPause`).classList.add("iconPause");
		play();
	} else {
		removeClass(".playOrPause", ".iconPause");
		document.querySelector(`.playOrPause`).classList.add("iconPlay");
		pause();
	}

});
document.querySelector(".statusVolume").addEventListener('input', (event) => audio.volume = event.target.value * 0.01)
document.querySelector(".mainStatus").addEventListener('input', (event) => audio.currentTime = (event.target.value * audio.duration) / 100)
document.querySelector(".m_playlist").addEventListener('click', (event) => {
	count = +event.target.dataset.songid + 1;
	prev(); 
	showPreview(); 
	play()
});

function renderSongs() {
	let renderNameSong = "",
		renderImg = document.querySelector('.preview');
	for (let key of dataSongs) {
		if (key.id === 1) {
			renderImg.style.background = `url(data/player/img/${key.urlImg})`;
			renderNameSong += `<li data-songId="${key.id}" class="active songs">${key.nameSong}</li>`;

		}
		else renderNameSong += `<li data-songId="${key.id}" class="songs">${key.nameSong}</li>`;
	}
	document.querySelector('.m_playlist').innerHTML = renderNameSong;
	audio.src = `data/player/songs/${dataSongs[0].urlSong}`;
}

function removeClass(yourSelectClass, removeYourClass) {
	let selectClass = document.querySelector(yourSelectClass);
	selectClass.classList.remove(removeYourClass);
}

function play() {	
	audio.play();
	setInterval(() => {
		traker(+audio.duration.toFixed(2),+audio.currentTime.toFixed(2));
		time(audio.currentTime);
	}, 1000)
}
function pause() {
	audio.pause();
}
function time(currentTime){
	return document.querySelector('#time').innerText = `${Math.floor(currentTime / 60)} : ${(currentTime % 60).toFixed(0)} `;
}
function showPreview() {
	const renderImg = document.querySelector('.preview');
	renderImg.style.background = `url(data/player/img/${dataSongs[count - 1].urlImg})`;
}

function traker(duration, currentTime){
    let valueTraker = ((100*currentTime) / duration).toFixed(1);
    if(valueTraker === '100.0') {next(); play()}
	return document.querySelector('.mainStatus').value = valueTraker; 
}

function next() {
	removeClass("li.active", "active");
	if (count < dataSongs.length) {
		count++;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	} else {
		count = 1;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	}
	audio.src = `data/player/songs/${dataSongs[count - 1].urlSong}`;
	togglePlay = false;
}
function prev() {
	removeClass("li.active", "active");
	if (count > 1) {
		count--;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	} else {
		count = dataSongs.length;
		document.querySelector(`[data-songId="${count}"]`).classList.add("active");
	}
	togglePlay = false;
	audio.src = `data/player/songs/${dataSongs[count - 1].urlSong}`;
}


