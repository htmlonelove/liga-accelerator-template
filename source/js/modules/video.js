const video = document.querySelector('.video');
const link = document.querySelector('.video__link');
const button = document.querySelector('.video__button');
const iframeBlock = video.querySelector('[data-video-container]');
link.removeAttribute('href');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

button.addEventListener('click', () => {
  if (video && iframeBlock) {
    button.remove();
    link.remove();
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
});
