function changeAddElements() {
  if (document.querySelector('nav') && document.querySelector('nav').children.length > 2) {
    document.querySelector('article').style.marginTop = '0';
  }
}

window.addEventListener('resize', () => {
  changeAddElements();
});

changeAddElements();
