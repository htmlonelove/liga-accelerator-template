let video = document.querySelector('.media__video-wrapper');
let videoBtn = document.querySelector('.media__play-btn');

function videoBtnOnclick() {
  if (video.paused) {
    video.play();
    videoBtn.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnclick() {
  video.pause();
  videoBtn.style.display = 'block';
}

if (video) {
  video.addEventListener('click', videoOnclick);
  videoBtn.addEventListener('click', videoBtnOnclick);
}
