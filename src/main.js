//--- Hamburger Menu Animation Script ---//
// import jQuery from 'jquery';
// const $ = jQuery;

// const { JSDOM } = require("jsdom");

// require(JSDOM).env("", function(err, window) {
//   if(err) {
//     console.error(err);
//     return;
//   }

//   var $ = require("jquery")(window);
// })

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menuItems");
const links = document.querySelectorAll(".menuItems .items");

/// onclick animate and close ///

let toggleMenu = () => {
  //alert("hallo");
  $(".icon").toggleClass("close");
  links.toggleClass("open");
  };

  // toggleMenu(); --> if uncommented-the func runs on page load,
  //  but says toggleMenu() is not defined when not called like this 
hamburger.click(function() {
  toggleMenu();
})

// modules.exports = toggleMenu;