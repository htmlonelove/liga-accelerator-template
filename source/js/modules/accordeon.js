//=====Accordeon===

const navList = document.querySelector(".navigation__list");
const contactsList = document.querySelector(".contacts__group");
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const header = document.querySelector(".contacts__header");

const isJs = (navList, contactsList) => {
  if (document.documentElement.clientWidth < 768) {
    navList.classList.remove("no-js");
    navList.classList.add("is-closed");
    contactsList.classList.remove("no-js");
    contactsList.classList.add("is-closed");
  }
};

isJs(navList, contactsList);

const showElementNav = (navList) => {
  navList.classList.remove("is-closed");
  navList.classList.add("is-open");
  plusButton.classList.add("hide");
  plusButton.classList.remove("show");
  minusButton.classList.remove("hide");
  minusButton.classList.add("show");
};

const hideElementNav = (navList) => {
  navList.classList.add("is-closed");
  navList.classList.remove("is-open");
  minusButton.classList.add("hide");
  minusButton.classList.remove("show");
  plusButton.classList.add("show");
  plusButton.classList.remove("hide");
};

const showElementCont = (contactsList) => {
  contactsList.classList.remove("is-closed");
  contactsList.classList.add("is-open");
  plusButton.classList.add("hide");
  plusButton.classList.remove("show");
  minusButton.classList.remove("hide");
  minusButton.classList.add("show");
};

const hideElementCont = (contactsList) => {
  contactsList.classList.add("is-closed");
  contactsList.classList.remove("is-open");
  minusButton.classList.add("hide");
  minusButton.classList.remove("show");
  plusButton.classList.add("show");
  plusButton.classList.remove("hide");
};

/* plusButton.addEventListener("click", (event) => {
  const plusPressed = event.target;
  const parentSection = plusPressed.parentElement.parentElement;
  const ulToHide = parentSection.querySelector("ul");
  ulToHide.style.display = "none";

  showElementNav(navList);
  console.log(event);
}); */

document.querySelector(".group").addEventListener("click", (event) => {
  if (!event.target.classList.contains("plus-button")) {
    return;
  }

  document
    .querySelectorAll(".group > *")
    .forEach((i) => (i.style.display = "none"));

  console.log(event.target);
});

minusButton.addEventListener("click", () => {
  hideElementNav(navList);
});

header.plusButton.addEventListener("click", () => {
  showElementCont(contactsList);
});

header.minusButton.addEventListener("click", () => {
  hideElementCont(contactsList);
});

export {
  isJs,
  showElementNav,
  hideElementNav,
  showElementCont,
  hideElementCont,
};
