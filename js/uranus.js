const planetImage2 = document.getElementById("planet-image2");
const planetImage3 = document.getElementById("planet-image3");
const mainText = document.getElementById("main-text");
const overviewBtn = document.getElementById("overview-btn");
const internalBtn = document.getElementById("internal-btn");
const surfaceBtn = document.getElementById("surface-btn");
const overviewText =
  "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
const internalText =
  "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
const surfaceText =
  "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.";
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
