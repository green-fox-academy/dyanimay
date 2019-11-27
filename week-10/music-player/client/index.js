'use strict'

let currentTrack = document.querySelector('#track-01');
console.log(currentTrack);

const playPauseButton = document.querySelector('.play-pause');

const keyboardEvents = document.addEventListener('keydown', (event) => {
	switch (event.code) {
		case 'Space':
			togglePlayPause();
      break;
  }
});

currentTrack.addEventListener('loadstart', (event) => {
	console.log(event);
});

currentTrack.addEventListener('play', (event) => {
	console.log(event);
});

currentTrack.addEventListener('ended', (event) => {
	console.log(event);
});


currentTrack.addEventListener('progress', (event) => {
	console.log(event);
	//trackLengthDisplay.textContent = durationConverter(currentTrack.duration);
	//progressBar.max = Math.floor(event.target.duration);
});

const togglePlayPause = () => {
	if (playPauseButton.getAttribute('id') == 'play') {
	// if (currentTrack.paused || currentTrack.ended) {
		playPauseButton.setAttribute('id', 'pause');
		currentTrack.play();
	} else {
		playPauseButton.setAttribute('id', 'play');
		currentTrack.pause();
	}
};