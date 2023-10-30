const gymVideo = () => {
  const videoContainer = document.querySelector('.gym__video-wrapper');
  const videoPoster = videoContainer.querySelector('[data-poster]');
  const videoButton = videoContainer.querySelector('[data-button]');
  const videoIframe = videoContainer.querySelector('[data-iframe]');

  const onVideoButtonClick = () => {
    videoPoster.style.display = 'none';
    videoButton.style.display = 'none';
    videoIframe.style.display = 'block';
  };

  videoButton.addEventListener('click', onVideoButtonClick);
};

export {gymVideo};
