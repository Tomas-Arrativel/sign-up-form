const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
    firstName.classList.add("input-control-error");
    firstName.classList.remove("input-control-success");
  } else {
    setSuccess(firstName);
    firstName.classList.remove("input-control-error");
    firstName.classList.add("input-control-success");
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
    lastName.classList.add("input-control-error");
    lastName.classList.remove("input-control-success");
  } else {
    setSuccess(lastName);
    lastName.classList.remove("input-control-error");
    lastName.classList.add("input-control-success");
  }

  if (emailValue === "") {
    setError(email, "Looks like this is not an email");
    email.classList.add("input-control-error");
    email.classList.remove("input-control-success");
  } else {
    setSuccess(email);
    email.classList.remove("input-control-error");
    email.classList.add("input-control-success");
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
    password.classList.add("input-control-error");
    password.classList.remove("input-control-success");
  } else {
    setSuccess(password);
    password.classList.remove("input-control-error");
    password.classList.add("input-control-success");
  }
};
