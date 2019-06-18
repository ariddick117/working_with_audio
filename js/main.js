(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

// set all attributes here with the name (whatever you want) document.querySelector("(name of class you wish to target")
	let audioEl = document.querySelector('audio'),
		pauseButton = document.querySelector('#pause'),
		playButton = document.querySelector('#play'),
		loadButton = document.querySelector("#loadmore");


	function pauseAudio() {
		audioEl.pause();
	}

	function playAudio() {
		audioEl.play();
	}

	function logEnded() {
		console.log("Song Ended")
	}

	function loadAudioTrack() {
		// set a new audio source
		audioEl.src = "assets/STP_Interstate_Love_Song.mp3";

		// load it and play it
		audioEl.load();
		audioEl.play();
	}

	audioEl.addEventListener("ended", logEnded);
	pauseButton.addEventListener("click", pauseAudio);
	playButton.addEventListener("click", playAudio);
	loadButton.addEventListener("click", loadAudioTrack);
})();