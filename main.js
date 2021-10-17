// Making Navbar button clickable
const NavigationLinks = document.getElementById("navigation");
const Hamburger = document.getElementById("nav-bar");

// modal butoton
const modalButton = document.querySelector(".button");

// close modal button
const closemodalButton = document.getElementById("close");

// modal
const modal = document.getElementById("myModal");

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

// radio button
const selectRadioButton = document.getElementById("select-radio");
const selectRadioButton1 = document.getElementById("select-radio1");

// donate form container
const donateFormContainer = document.querySelector(".donate-container");
const donateFormContainer1 = document.querySelector(".donate-container1");

// third section
const donatedAmount = document.getElementById("donated-amount").innerHTML;
const totalBackers = document.getElementById("total-backers").innerText;

// const currencyRemoval = parseFloat(donatedAmount.substring(1));
const currencyRemoval = parseFloat(donatedAmount.replace(/[^0-9\.-]+/g, ""));
const convertedTotalBackers = parseInt(totalBackers.replace(/,/g, ""));

// form

// donateButton
const donateButton = document.getElementById("button1");
const donateButton1 = document.getElementById("button2");

console.log(convertedTotalBackers);
console.log(currencyRemoval);

// console.log(parseFloat(donatedAmount.replace(/,/g, '')));
console.log(donatedAmount);
// console.log(calculation);

// console.log(convertedDonatedAmount);
// console.log(totalBackers);

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

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closemodalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

selectRadioButton.addEventListener("click", () => {
  if (donateFormContainer.style.display != "block") {
    donateFormContainer.style.display = "block";
  } else {
    donateFormContainer.style.display = "none";
  }
});

selectRadioButton1.addEventListener("click", () => {
  if (donateFormContainer1.style.display != "block") {
    donateFormContainer1.style.display = "block";
  } else {
    donateFormContainer1.style.display = "none";
  }
});

donateButton.addEventListener("click", () => {
  const amountDonated = parseInt(document.querySelector('#amountInput').value);
  console.log(amountDonated);
  const totalDonation = amountDonated + currencyRemoval;
  console.log(totalDonation);
  // const amountDonated1 = document.getElementById("amount1").value;
});

// donateButton1.addEventListener("click", () => {
//   console.log(amountDonated1);
//   amountDonated1.value = "";
// });


