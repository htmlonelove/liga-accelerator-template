function initSpoiler() {
  const spoilerContainer = document.querySelector('[data-spoiler="container"]');
  const spoilerButton = document.querySelector('[data-spoiler="button"]');

  const toggleSpoiler = () => {
    if (spoilerContainer.classList.contains('is-shown')) {
      spoilerButton.textContent = 'Подробнее';
    } else {
      spoilerButton.textContent = 'Свернуть';
    }

    spoilerContainer.classList.toggle('is-shown');
  };

  if (spoilerContainer && spoilerButton) {
    spoilerButton.addEventListener('click', toggleSpoiler);
  }
}

export {initSpoiler};
