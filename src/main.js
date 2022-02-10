//--- Hamburger Menu Animation Script ---//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menuItems");
const links = document.querySelectorAll(".menuItems li");

/// onclick animate and close ///

window.toggleMenu = () => {
  // alert("hallo");
  $(".icon").toggleClass("close");
  navLinks.classList.toggle("open");
};

// form validation client side//

const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("Email");

form.addEventListener("submit", () => {
  // e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "input-container error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-container success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// this is an imported animation for smooth scrolling//
const scroll = new SmoothScroll(' a[href*="#"]', {
  speed: 1000,
});
