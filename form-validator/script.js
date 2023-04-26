const form = document.getElementById("form");
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  //   Style main message for an error message
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  //   Check to see if the password matches
  if (passwordEl1.value === passwordEl2.value) {
    passwordsMatch = true;
    passwordEl1.style.borderColor = "green";
    passwordEl2.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    passwordEl1.style.borderColor = "red";
    passwordEl2.style.borderColor = "red";
    return;
  }
  //   If form is vaild  and passwors match
  if (isValid && passwordsMatch) {
    message.textContent = "Succesfully Registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with the user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  //   Validate the form
  validateForm();
  //   Submit the data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
