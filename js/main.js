const submitButton = document.querySelector(".submit-button");
const closeButton = document.querySelector(".close-button");
const headingRequest = document.querySelector(".heading-request");
const form = document.querySelector(".request-form-container");
const modal = document.querySelector("#modal-container");
const backgroundModal = document.querySelector("#request");

function submitForm() {
  modal.style.display = "block";
}

function closeFormm() {
  modal.style.display = "none";
}

submitButton.addEventListener("click", submitForm);
closeButton.addEventListener("click", closeFormm);

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
