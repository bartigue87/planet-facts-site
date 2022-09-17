const planetImage2 = document.getElementById("planet-image2");
const planetImage3 = document.getElementById("planet-image3");
const mainText = document.getElementById("main-text");
const overviewBtn = document.getElementById("overview-btn");
const internalBtn = document.getElementById("internal-btn");
const surfaceBtn = document.getElementById("surface-btn");
const overviewText =
  "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
const internalText =
  "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
const surfaceText =
  "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.";
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
