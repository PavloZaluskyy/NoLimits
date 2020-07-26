renderSongs();
function renderSongs(){
	let renderNameSong = "",
		renderImg = document.querySelector('.pla_f');
	for(let key of dataSongs){
		if(key.id === 1){
		renderImg.style.background = `url(/data/player/img/${key.urlImg})`;
		renderNameSong += `<li data-id="${key.id}" class="active songs">${key.nameSong}</li>`;
		
		}
		else renderNameSong += `<li data-id="${key.id}" class="songs">${key.nameSong}</li>`;
	}
	document.querySelector('.m_playlist').innerHTML = renderNameSong;
}

document.querySelector('.m_playlist').addEventListener('click', event => {
		console.log(+event.target.dataset.id - 1)
		playSong(dataSongs[+event.target.dataset.id - 1]);
	
});

function playSong(url){
	const audio = new Audio(`../data/player/songs/${url.urlSong}`);
	audio.play();
}