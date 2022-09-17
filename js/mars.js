const planetImage2 = document.getElementById("planet-image2");
const planetImage3 = document.getElementById("planet-image3");
const mainText = document.getElementById("main-text");
const overviewBtn = document.getElementById("overview-btn");
const internalBtn = document.getElementById("internal-btn");
const surfaceBtn = document.getElementById("surface-btn");
const overviewText =
  "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.";
const internalText =
  "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
const surfaceText =
  "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
const navItems = document.getElementById("nav-items");
const infoBoxes = document.querySelector(".info-boxes-container");

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

overviewBtn.addEventListener("click", handleOverviewBtnClick);
internalBtn.addEventListener("click", handleInternalBtnClick);
surfaceBtn.addEventListener("click", handleSurfaceBtnClick);
