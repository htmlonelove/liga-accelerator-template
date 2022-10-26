//==========About company========

const buttonAbout = document.querySelector(".about-company-button");
const buttonMore = document.querySelector(".button-more");
const extraText = document.querySelector(".about-company__extra-text");
const buttonHide = document.querySelector(".button-hide");

const jsWorking = (buttonAbout) => {
  buttonAbout.classList.remove("button__no-js");
  buttonAbout.classList.add("is-closed");
};

jsWorking(buttonAbout);

const showMore = (extraText, buttonHide, buttonMore) => {
  extraText.classList.remove("hidden");
  buttonHide.classList.remove("hidden");
  buttonMore.classList.add("hidden");
};

const showLess = (extraText, buttonHide, buttonMore) => {
  extraText.classList.add("hidden");
  buttonHide.classList.add("hidden");
  buttonMore.classList.remove("hidden");
};

buttonMore.addEventListener("click", () => {
  showMore(extraText, buttonHide, buttonMore);
});

buttonHide.addEventListener("click", () => {
  showLess(extraText, buttonHide, buttonMore);
});

export { jsWorking, showMore, showLess };
