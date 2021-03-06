// Making Navbar button clickable
const NavigationLinks = document.getElementById("navigation");
const Hamburger = document.getElementById("nav-bar");
const closeHamburger = document.getElementById("closeNavBar");

const closeLinkButton = document.getElementById("close-container");

// modal butoton
const modalButton = document.querySelector(".button");

// close modal button
const closemodalButton = document.getElementById("close");

// modal
const modal = document.getElementById("myModal");
const modal1 = document.getElementById("myModal2");

Hamburger.addEventListener("click", () => {
  NavigationLinks.classList.remove("nav-links-container");
  Hamburger.classList.remove("hamburger");
  closeLinkButton.classList.remove("close-container");
});

closeHamburger.addEventListener("click", () => {
  NavigationLinks.classList.add("nav-links-container");
  Hamburger.classList.add("hamburger");
  closeLinkButton.classList.add("close-container");
});

closeHamburger.addEventListener("click", () => {
  NavigationLinks.classList.add("nav-links-container");
  closeHamburger.classList.add("close");
  Hamburger.classList.add("hamburger");
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

// error warnings for the first modal
const amountMoreErrorText = document.querySelector(".amountMore");
const amountLessErrorText = document.querySelector(".amountLess");
const amountValidErrorText = document.querySelector(".amountValid");

// error warnings for the second modal
const amountMoreErrorText1 = document.querySelector(".amountMore1");
const amountLessErrorText1 = document.querySelector(".amountLess1");
const amountValidErrorText1 = document.querySelector(".amountValid1");

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
    donateFormContainer1.style.display = "none";
    grayBorderColor1.style.borderColor = "#e8e8e8";
  } else {
    donateFormContainer.style.display = "none";
    grayBorderColor.style.borderColor = "#e8e8e8";
  }
});

selectRadioButton1.addEventListener("click", () => {
  if (donateFormContainer1.style.display != "block") {
    donateFormContainer1.style.display = "block";
    grayBorderColor1.style.borderColor = "hsl(176, 50%, 47%)";
    donateFormContainer.style.display = "none";
    grayBorderColor.style.borderColor = "#e8e8e8";
  } else {
    donateFormContainer1.style.display = "none";
    grayBorderColor1.style.borderColor = "#e8e8e8";
  }
});

var width = 0;
var totalCalculations = 0;
var finalTotalBackers;

const amountDonatedForm = document.querySelector("#amountInput");
const amountDonatedForm1 = document.querySelector("#amount1");

amountDonatedForm.addEventListener("click", () => {
  amountLessErrorText.style.display = "none";
  amountMoreErrorText.style.display = "none";
  amountValidErrorText.style.display = "none";
});

amountDonatedForm1.addEventListener("click", () => {
  amountLessErrorText1.style.display = "none";
  amountMoreErrorText1.style.display = "none";
  amountValidErrorText1.style.display = "none";
});

donateButton.addEventListener(
  "click",
  (finalTotalBackers, totalCalculations) => {
    var amountDonated = parseInt(document.querySelector("#amountInput").value);
    if (amountDonated < 25) {
    amountMoreErrorText.style.display = "block";
    } else if (amountDonated > 75) {
      amountLessErrorText.style.display = "block";
    } else if (isNaN(amountDonated) || amountDonated == "") {
      amountValidErrorText.style.display = "block";
    } else {
      console.log("correct");
      var donatedAmount1 = document.getElementById("donated-amount").innerHTML;
      var currencyRemoval1 = parseInt(
        donatedAmount1.replace(/[^0-9\.-]+/g, "")
      );
      totalDonation = amountDonated + currencyRemoval1;
      totalCalculations = totalDonation
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(totalCalculations);
      document.getElementById(
        "donated-amount"
      ).innerHTML = `$${totalCalculations}`;
      modal1.style.display = "block";
      modal.style.display = "none";
      const progressBar = document.querySelector(".progress-bar");
      convertedTotalBackers++;
      finalTotalBackers = convertedTotalBackers.toLocaleString();
      document.getElementById("total-backers").innerHTML = finalTotalBackers;
      donateFormContainer.style.display = "none";
      grayBorderColor.style.borderColor = "#e8e8e8";
      amountDonated.value = " ";
      if (width < 100) {
        width += 3;
        progressBar.style.width = width + "%";
      }
    }
  }
);

donateButton1.addEventListener(
  "click",
  (finalTotalBackers, totalCalculations) => {
    console.log(finalTotalBackers);
    console.log(totalCalculations);
    var amountDonated1 = parseInt(document.querySelector("#amount1").value);
    console.log(amountDonated1);
    if (amountDonated1 < 75) {
    amountMoreErrorText1.style.display = "block";
    } else if (amountDonated1 > 200) {
      amountLessErrorText1.style.display = "block";
    } else if (isNaN(amountDonated1) || amountDonated1 == "") {
      amountValidErrorText1.style.display = "block";
    } else {
      console.log("correct");
      var donatedAmount2 = document.getElementById("donated-amount").innerHTML;
      var currencyRemoval2 = parseInt(
        donatedAmount2.replace(/[^0-9\.-]+/g, "")
      );
      const totalDonation = amountDonated1 + currencyRemoval2;
      totalCalculations = totalDonation
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById(
        "donated-amount"
      ).innerHTML = `$${totalCalculations}`;
      convertedTotalBackers++;
      finalTotalBackers = convertedTotalBackers.toLocaleString();
      const progressBar = document.querySelector(".progress-bar");
      document.getElementById("total-backers").innerHTML = finalTotalBackers;
      donateFormContainer1.style.display = "none";
      grayBorderColor1.style.borderColor = "#e8e8e8";
      modal1.style.display = "block";
      modal.style.display = "none";
      if (width < 100) {
        width += 5;
        progressBar.style.width = width + "%";
      }
    }
  }
);
closeModal.addEventListener("click", () => {
  modal1.style.display = "none";
});
