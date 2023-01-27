"use strict";

var imgElContainer = document.querySelector(".img-container");
var btn = document.getElementById("toggle");

var getDogData = function () {
  imgElContainer.innerHTML = "";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var img = document.createElement("img");
      img.setAttribute("src", data.message);
      img.setAttribute("alt", "dog-image");
      imgElContainer.appendChild(img);
    });
};

getDogData();

btn.addEventListener("click", getDogData);
