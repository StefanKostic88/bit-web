"use strict";
var x = function () {
  var formEl = document.querySelector("form");
  for (var i = 0; i < formEl.children.length; i++) {
    var el = formEl.children[i];
    if (el.attributes.required && el.value === "") {
      el.classList.add("red");
    }
  }
};
x();
