const planetImage2 = document.getElementById("planet-image2");
const planetImage3 = document.getElementById("planet-image3");
const mainText = document.getElementById("main-text");
const overviewBtn = document.getElementById("overview-btn");
const internalBtn = document.getElementById("internal-btn");
const surfaceBtn = document.getElementById("surface-btn");
const overviewText =
  "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
const internalText =
  "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
const surfaceText =
  "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
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
