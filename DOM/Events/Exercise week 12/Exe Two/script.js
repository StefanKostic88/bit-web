"use strict";

var formNode = document.querySelector("form");
var outputNode = document.querySelector(".output");

var addToNode = function (node, value) {
  console.log(node);
  var liEl = document.createElement("li");
  liEl.textContent = value;
  node.append(liEl);
};

formNode.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputVal = e.target.children[0];
  if (inputVal.value === "") return;

  addToNode(outputNode, inputVal.value);
  inputVal.value = "";
});
