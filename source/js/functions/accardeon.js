const accardeonLists = [...document.querySelectorAll('[data-section="accardeon"]')];

const changeHeight = (evt) => {
  let item = evt.target.closest('[data-section="accardeon"]');

  if (item.dataset.open === 'false') {
    accardeonLists.forEach((list) => {
      list.style.maxHeight = '60px';
      list.dataset.open = false;
      list.querySelector('[data-icon="button"]').setAttribute('xlink:href', 'img/sprite.svg#plus');
    });
    item.style.maxHeight = 'none';
    item.dataset.open = true;
    item.querySelector('[data-icon="button"]').setAttribute('xlink:href', 'img/sprite.svg#minus');
  } else {
    accardeonLists.forEach((list) => {
      list.style.maxHeight = '60px';
      list.dataset.open = false;
      list.querySelector('[data-icon="button"]').setAttribute('xlink:href', 'img/sprite.svg#plus');
    });
    item.style.maxHeight = '60px';
    item.dataset.open = false;
    item.querySelector('[data-icon="button"]').setAttribute('xlink:href', 'img/sprite.svg#plus');
  }
};

const onAccardeon = () => {
  accardeonLists.forEach((item) => {
    item.addEventListener('click', (evt) => changeHeight(evt));
  });
};

export {onAccardeon};
