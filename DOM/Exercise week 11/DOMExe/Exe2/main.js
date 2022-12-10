"use strict";

var parentEl = document.querySelector("div");
var firstList = parentEl.children[0];
var secondList = parentEl.children[1];
console.log(firstList);
var setActive = function () {
  for (var i = 0; i < secondList.children.length; i++) {
    if (secondList.children[i].classList.contains("active")) {
      secondList.children[i].classList.remove("active");
      break;
    }
    firstList.children[1].classList.add("active");
  }
};

setActive();
