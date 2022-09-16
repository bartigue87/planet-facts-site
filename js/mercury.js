const planetImage2 = document.getElementById("planet-image2");
const planetImage3 = document.getElementById("planet-image3");
const mainText = document.getElementById("main-text");
const overviewBtn = document.getElementById("overview-btn");
const internalBtn = document.getElementById("internal-btn");
const surfaceBtn = document.getElementById("surface-btn");
const overviewText =
  "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
const internalText =
  "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
const surfaceText =
  "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
const navItems = document.getElementById("nav-items");
const infoBoxes = document.querySelector(".info-boxes-container");
const hamburger = document.getElementById("hamburger");
let isHamburgerClicked = false;

function handleOverviewBtnClick() {
  internalBtn.classList.remove("active");
  surfaceBtn.classList.remove("active");
  overviewBtn.classList.add("active");
  planetImage2.style.visibility = "hidden";
  planetImage3.style.visibility = "hidden";
  mainText.textContent = overviewText;
}

function handleInternalBtnClick() {
  overviewBtn.classList.remove("active");
  surfaceBtn.classList.remove("active");
  internalBtn.classList.add("active");
  planetImage2.style.visibility = "visible";
  planetImage3.style.visibility = "hidden";
  mainText.textContent = internalText;
}

function handleSurfaceBtnClick() {
  internalBtn.classList.remove("active");
  overviewBtn.classList.remove("active");
  surfaceBtn.classList.add("active");
  planetImage2.style.visibility = "hidden";
  planetImage3.style.visibility = "visible";
  mainText.textContent = surfaceText;
}

function handleHamburgerClick() {
  toggleVisibilities();
  isHamburgerClicked = !isHamburgerClicked;
}

function toggleVisibilities() {
  isHamburgerClicked
    ? (infoBoxes.style.visibility = "visible")
    : (infoBoxes.style.visibility = "hidden");
  isHamburgerClicked
    ? (navItems.style.visibility = "hidden")
    : (navItems.style.visibility = "visible");
}

overviewBtn.addEventListener("click", handleOverviewBtnClick);
internalBtn.addEventListener("click", handleInternalBtnClick);
surfaceBtn.addEventListener("click", handleSurfaceBtnClick);
hamburger.addEventListener("click", handleHamburgerClick);
