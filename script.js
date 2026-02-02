const form = document.querySelector(".js-form");
const acceptContainer = document.querySelector(".js-accept-container");

const nameInput = document.querySelector(".js-name-input");
const numberInput = document.querySelector(".js-number-input");
const cvcInput = document.querySelector(".js-cvc-input");
const monthInput = document.querySelector(".js-month-input");
const yearInput = document.querySelector(".js-year-input");

const cardName = document.querySelector(".js-card-name");
const cardNumber = document.querySelector(".js-card-number");
const cardCVC = document.querySelector(".js-card-cvc");
const cardDate = document.querySelector(".js-card-date");

const confirmButton = document.querySelector(".js-confirm-button");

function displayName() {
  cardName.innerHTML = nameInput.value;
}

function displayNumber() {
  cardNumber.innerHTML = numberInput.value;
}

function displayCVC() {
  cardCVC.innerHTML = cvcInput.value;
}

function displayDate() {
  cardDate.innerHTML = monthInput.value + "/" + yearInput.value;
}

function confirmForm() {
  if (
    (nameInput.value,
    numberInput.value,
    monthInput.value,
    yearInput.value,
    cvcInput.value === "")
  ) {
    alert("Please, fully fill the form first!");
  } else {
    form.style.display = "none";
    acceptContainer.style.display = "flex";
  }
}

function goBackToForm() {
  form.style.display = "flex";
  acceptContainer.style.display = "none";

  nameInput.value = "";
  numberInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  cvcInput.value = "";

  cardName.innerHTML = "Jane Applessed";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardDate.innerHTML = "00/00";
  cardCVC.innerHTML = "000";
}
