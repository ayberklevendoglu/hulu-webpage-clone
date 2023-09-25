const tabOne = document.querySelector("#tab-1");
const tabTwo = document.querySelector("#tab-2");
const tabThree = document.querySelector("#tab-3");
const spotlight = document.querySelector("#spotlight");

const tabOneContent = document.querySelector("#spotlight-1");
const tabTwoContent = document.querySelector("#spotlight-2");
const tabThreeContent = document.querySelector("#spotlight-3");

tabOne.addEventListener("click", () => {
  tabOne.classList.add("tab-border");
  tabTwo.classList.remove("tab-border");
  tabThree.classList.remove("tab-border");
  tabOneContent.classList.add("show");
  tabTwoContent.classList.remove("show");
  tabThreeContent.classList.remove("show");
  spotlight.style.background =
    "url('images/spotlight-1.jpg') no-repeat top center/cover";
  // spotlight.style.transition = "all 0.5s ease";
});

tabTwo.addEventListener("click", () => {
  tabTwo.classList.add("tab-border");
  tabOne.classList.remove("tab-border");
  tabThree.classList.remove("tab-border");
  tabTwoContent.classList.add("show");
  tabOneContent.classList.remove("show");
  tabThreeContent.classList.remove("show");
  spotlight.style.background =
    "url('images/spotlight-2.jpg') no-repeat top center/cover";
  // spotlight.style.transition = "all 0.5s ease";
});

tabThree.addEventListener("click", () => {
  tabThree.classList.add("tab-border");
  tabOne.classList.remove("tab-border");
  tabTwo.classList.remove("tab-border");
  tabThreeContent.classList.add("show");
  tabOneContent.classList.remove("show");
  tabTwoContent.classList.remove("show");
  spotlight.style.background =
    "url('images/spotlight-3.jpg') no-repeat top center/cover";
  // spotlight.style.transition = "all 0.5s ease";
});
