// Making Navbar button clickable
const NavigationLinks = document.getElementById("navigation");
const Hamburger = document.getElementById("nav-bar");

// modal butoton
const modalButton = document.querySelector(".button");

// close modal button
const closemodalButton = document.getElementById("close");

// modal
const modal = document.getElementById("myModal");
const modal1 = document.getElementById("myModal2");

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
const totalBackers = document.getElementById("total-backers").innerHTML;

// const currencyRemoval = parseFloat(donatedAmount.substring(1));
var currencyRemoval = parseInt(donatedAmount.replace(/[^0-9\.-]+/g, ""));
var convertedTotalBackers = parseInt(totalBackers.replace(/,/g, ""));

// border color
const grayBorderColor = document.querySelector(
  ".modal-content-inner-container3"
);
const grayBorderColor1 = document.querySelector(
  ".modal-content-inner-container4"
);

const closeModal = document.querySelector(".button-got");

// donateButton
const donateButton = document.getElementById("button1");
const donateButton1 = document.getElementById("button2");

// progress bar
const progressBar = document.querySelector(".progress-bar");

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
  if (event.target == modal || event.target == modal1) {
    modal.style.display = "none";
    modal1.style.display = "none";
  }
};

selectRadioButton.addEventListener("click", () => {
  if (donateFormContainer.style.display != "block") {
    donateFormContainer.style.display = "block";
    grayBorderColor.style.borderColor = "hsl(176, 50%, 47%)";
  } else {
    donateFormContainer.style.display = "none";
    grayBorderColor.style.borderColor = "#e8e8e8";
  }
});

selectRadioButton1.addEventListener("click", () => {
  if (donateFormContainer1.style.display != "block") {
    donateFormContainer1.style.display = "block";
    grayBorderColor1.style.borderColor = "hsl(176, 50%, 47%)";
  } else {
    donateFormContainer1.style.display = "none";
    grayBorderColor1.style.borderColor = "#e8e8e8";
  }
});

var width = 0;
var total;
var finalTotalBackers;

donateButton.addEventListener("click", (finalTotalBackers,total) => {
  const amountDonated = parseInt(document.querySelector("#amountInput").value);
  console.log(amountDonated);
  console.log(finalTotalBackers);
  console.log(total);
  if (amountDonated < 25) {
    console.log("Amount should be more than 25");
  } else if (amountDonated > 75) {
    console.log("Amount should be less than 75");
  } else {
    console.log("correct");
    totalDonation = amountDonated + currencyRemoval;
    console.log(totalDonation);
    total = totalDonation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(total);
    document.getElementById("donated-amount").innerHTML = `$${total}`;
    console.log(`$${total}`);
    modal1.style.display = "block";
    modal.style.display = "none";
    const progressBar = document.querySelector(".progress-bar");
    convertedTotalBackers++;
    console.log(convertedTotalBackers);
    finalTotalBackers = convertedTotalBackers.toLocaleString();
    document.getElementById("total-backers").innerHTML = finalTotalBackers;
    if (width < 100) {
      width += 5;
      progressBar.style.width = width + "%";
    }
  }
  console.log(finalTotalBackers);
  console.log(total);
});

donateButton1.addEventListener("click", (finalTotalBackers,Total) => {
  const amountDonated1 = parseInt(document.querySelector("#amount1").value);
  console.log(amountDonated1);
  if (amountDonated1 < 75) {
    console.log("Amount should be more than 75");
  } else if (amountDonated1 > 200) {
    console.log("Amount should be less than 200");
  } else {
    console.log("correct");
    const totalDonation = amountDonated1 + currencyRemoval;
    console.log(totalDonation);
    var total = totalDonation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(total);
    document.getElementById("donated-amount").innerHTML = `$${totalDonation}`;
    convertedTotalBackers++;
    console.log(convertedTotalBackers);
    finalTotalBackers = convertedTotalBackers.toLocaleString();
    const progressBar = document.querySelector(".progress-bar");
    document.getElementById("total-backers").innerHTML = finalTotalBackers;
    modal1.style.display = "block";
    modal.style.display = "none";
    if (width < 100) {
      width += 7;
      progressBar.style.width = width + "%";
    }
  }
  console.log(finalTotalBackers);
  console.log(total);
});

closeModal.addEventListener("click", () => {
  modal1.style.display = "none";
});
