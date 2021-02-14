"use strict";

var navToggle = document.querySelector(".nav-toggle");
var side = document.querySelector(".side");
navToggle.addEventListener('click', function () {
  side.classList.toggle("show-side");
});