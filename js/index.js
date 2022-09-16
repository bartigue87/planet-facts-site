const hamburger = document.getElementById("hamburger");
let isHamburgerClicked = false;

function handleHamburgerClick() {
  toggleVisibilities();
  isHamburgerClicked = !isHamburgerClicked;
}

function toggleVisibilities() {
  if (isHamburgerClicked === true) {
    infoBoxes.style.visibility = "visible";
    navItems.style.visibility = "hidden";
    hamburger.src = "../images/hamburger.png";
  } else {
    infoBoxes.style.visibility = "hidden";
    navItems.style.visibility = "visible";
    hamburger.src = "../images/active-hamburger.png";
  }
}
hamburger.addEventListener("click", handleHamburgerClick);
