//--- Hamburger Menu Animation Script ---//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menuItems");
const links = document.querySelectorAll(".menuItems li");

/// onclick animate and close ///

  window.toggleMenu = () => {
    // alert("hallo");
    $(".icon").toggleClass("close");
    navLinks.classList.toggle("open");
    // links.forEach(link => {
    //   link.classList.toggle("fade");
    // });
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



    // this is an imported animation for smooth scrolling//
  const scroll = new SmoothScroll(' a[href*="#"]', {
    speed:1000
  });




/// Form//
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });







  // $('input').on('change', function() {
  //   $('body').toggleClass('blue');
  // });