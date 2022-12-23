"use strict";

var bodyNode = document.querySelector("body");

var toggleTimer;
bodyNode.addEventListener("click", function (e) {
  clearInterval(toggleTimer);
  if (e.target.classList.contains("toggle")) {
    bodyNode.classList.toggle("add-background");
    toggleTimer = setInterval(() => {
      bodyNode.classList.toggle("add-background");
    }, 1000);
  }
  if (e.target.classList.contains("off")) {
    clearInterval(toggleTimer);
  }
});
