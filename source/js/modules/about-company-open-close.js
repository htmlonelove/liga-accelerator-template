export const aboutCompanyOpenClose = () => {

  let aboutCompanyOpenButton = document.querySelector('.about-company__button-open');
  let aboutCompanyCloseButton = document.querySelector('.about-company__button-close');
  let companyParagraphThird = document.querySelector('.company-description__paragraph--third');
  let companyParagraphFourth = document.querySelector('.company-description__paragraph--fourth');
  let companyTextHidable = document.querySelector('.company-description__paragraph--hidable');

  aboutCompanyOpenButton.addEventListener('click', function () {
    companyParagraphThird.classList.remove('visually-hidden');
    companyParagraphFourth.classList.remove('visually-hidden');
    companyTextHidable.classList.remove('company-description__paragraph--hidable');
    aboutCompanyOpenButton.classList.add('visually-hidden');
    aboutCompanyCloseButton.classList.remove('visually-hidden');
  });

  aboutCompanyCloseButton.addEventListener('click', function () {
    companyParagraphThird.classList.add('visually-hidden');
    companyParagraphFourth.classList.add('visually-hidden');
    companyTextHidable.classList.add('company-description__paragraph--hidable');
    aboutCompanyCloseButton.classList.add('visually-hidden');
    aboutCompanyOpenButton.classList.remove('visually-hidden');
  });
};
