//--- Hamburger Menu Animation Script ---//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menuItems");
const links = document.querySelectorAll(".menuItems .items");

/// onclick animate and close ///

  window.toggleMenu = () => {
    // alert("hallo");
    $(".icon").toggleClass("close");
    links.toggleClass("open");

  };