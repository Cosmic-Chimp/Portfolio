parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=document.querySelector(".hamburger"),o=document.querySelector(".menuItems"),a=document.querySelectorAll(".menuItems li");window.toggleMenu=function(){$(".icon").toggleClass("close"),o.classList.toggle("open")};var l=0,c=document.getElementsByClassName("carousel__item"),i=c.length;function u(){var t,n=e(c);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.classList.remove("carousel__item--visible"),r.classList.add("carousel__item--hidden")}}catch(o){n.e(o)}finally{n.f()}c[l].classList.add("carousel__item--visible")}function s(){l===i-1?l=0:l++,u()}function m(){0===l?l=i-1:l--,u()}document.getElementById("carousel__button--next").addEventListener("click",function(){s()}),document.getElementById("carousel__button--prev").addEventListener("click",function(){m()});for(var d=document.getElementById("myModal"),f=document.getElementsByClassName("carousel__item"),y=document.getElementById("img01"),v=document.getElementsByClassName("imgbtns"),g=function(e){var t=f[e];t.onclick=function(e){console.log(e),d.style.display="block",y.src=t.src}},b=0;b<f.length;b++)g(b);var E=document.getElementsByClassName("close")[0];E.onclick=function(){d.style.display="none"};var p=document.getElementById("form"),h=document.getElementById("userName"),_=document.getElementById("Email");function I(){var e=h.value.trim(),t=_.value.trim();""===e?B(h,"Username cannot be blank"):S(h),""===t?B(_,"Email cannot be blank"):A(t)?S(_):B(_,"Not a valid email")}function B(e,t){var n=e.parentElement,r=n.querySelector("small");n.className="input-container error",r.innerText=t}function S(e){e.parentElement.className="input-container success"}function A(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}p.addEventListener("submit",function(){I()});var w=new SmoothScroll(' a[href*="#"]',{speed:1e3});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.43b07d39.js.map