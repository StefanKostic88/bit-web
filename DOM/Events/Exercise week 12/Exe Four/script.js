"use strict";

var marioEl = document.querySelector(".mario-movement");
var marioContainer = document.querySelector(".mario-img");
var containerNode = document.querySelector(".contianer");

var distance = 0;
var leftProp = 340;
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    marioEl.setAttribute("src", "./img/mario_running.gif");
    3;
    distance += 15;
    leftProp += 15;
    console.log(leftProp);

    containerNode.style.transform = `translateX(-${distance}px)`;
    marioContainer.style.left = `${leftProp}px`;
  }
});

window.addEventListener("keyup", function (e) {
  marioEl.setAttribute("src", "./img/mario.png");
});
