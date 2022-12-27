"use strict";

var fieldEl = document.querySelector(".img-container ");
var playerEl = document.getElementById("player");
var buttonNode = document.querySelector("button");

var movePlayer = function (e) {
  if (e.target.classList.contains("disable")) return;

  playerEl.style.top = e.offsetY + "px";
  playerEl.style.left = e.offsetX + "px";
};

fieldEl.addEventListener("click", movePlayer);

buttonNode.addEventListener("click", function () {
  fieldEl.removeEventListener("click", movePlayer);
});
