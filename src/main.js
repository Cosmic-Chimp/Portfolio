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

  //---> CAROUSEL FUNCTIONALITY <---//
  let slidePosition = 0;
  const slides = document.getElementsByClassName('carousel__item');
  const totalSlides = slides.length;
  
  //console.log(totalslides)// 
  document.
    getElementById('carousel__button--next')
    .addEventListener("click", function() {
      moveToNextSlide();
    });
  document.
    getElementById('carousel__button--prev')
    .addEventListener("click", function() {
      moveToPrevSlide();
    });
  
  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
    }
  
    slides[slidePosition].classList.add('carousel__item--visible');
  }
  
  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
  
    updateSlidePosition();
  }
  
  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
  
    updateSlidePosition();
  }


// fullscreen popup on carouselItem click//

      // create references to the modal...
let modal = document.getElementById('myModal');
// get images
let images = document.getElementsByClassName('carousel__item');
// the image in the modal
let modalImg = document.getElementById("img01");
// btns under images
let btns = document.getElementsByClassName("imgbtns");


// loop through the images with class
for (let i = 0; i < images.length; i++) {
  let img = images[i];

  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = img.src;
    // btns.innerHTML = this.alt;
  }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}




// form validation client side//

const form = document.getElementById('form');
const username = document.getElementById('userName');
const email = document.getElementById('Email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'input-container error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input-container success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


    // this is an imported animation for smooth scrolling//
    const scroll = new SmoothScroll(' a[href*="#"]', {
      speed:1000
    });