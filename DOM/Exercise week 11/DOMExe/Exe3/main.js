"use strict";

var listEl = document.querySelector("ul").children;
var printText = function (el) {
  alert(el.textContent);
};

// printText(listEl[4]);

var changeText = function (string) {
  listEl[4].textContent = string;
};
// changeText("This Is The New String");
