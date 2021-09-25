// Making Navbar button clickable
const NavigationLinks = document.getElementById("navigation");
const Hamburger = document.getElementById("nav-bar");

Hamburger.addEventListener("click", () => {
  NavigationLinks.classList.toggle("nav-links-container");
});

// Making SVG link clickable
const svgClickable = document.querySelector(".bookmark");
const svgClickable1 = document.querySelector(".bookmark1");

//text in the SVG to be changed
const svgText = document.getElementById("textChange");
const svgText1 = document.getElementById("textChanged");

// svg icon to be changed
const circle = document.getElementById("circle-fill");
const path = document.getElementById("path-fill");

// svg icon to be changed for mobile view
const circle1 = document.getElementById("circle-fill1");
const path1 = document.getElementById("path-fill1");

//adjusting the opacity of the bookmark container
const adjustBookContain = document.getElementById("bookmark-container");

// adding a function to the SVG
svgClickable.addEventListener("click", () => {
  if (svgText1.style.display !== "block") {
    svgText1.style.display = "block";
    circle.style.fill = "hsl(176, 72%, 28%)";
    path.style.fill = "hsl(0,0%,100%)";
    path.style.opacity = "1";
    adjustBookContain.style.backgroundColor = "hsl(149,54%,75%)";
    svgText.style.display = "none";
  } else {
    path.style.fill = "rgb(232,232,232)";
    path.style.opacity = "0.4";
    circle.style.fill = "hsl(0, 0%, 48%)";
    svgText1.style.display = "none";
    adjustBookContain.style.backgroundColor = "hsl(0, 0%, 48%)";
    svgText.style.display = "block";
  }
});

svgClickable1.addEventListener("click", () => {
  if (circle1.style.fill === "rgb(122, 122, 122)") {
    circle1.style.fill = "hsl(176, 72%, 28%)";
    path1.style.fill = "hsl(0,0%,100%)";
    path1.style.opacity = "1";
  } else {
    circle1.style.fill = "rgb(122, 122, 122)";
  }
});

console.log(circle1.style.fill === "rgb(122, 122, 122)");
console.log(circle1.style.fill === "rgb(20, 123, 136)");
