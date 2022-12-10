"use sctrict";
var secondList = document.querySelectorAll("ul")[1];
secondList.classList.add("background-color");

var allLiEl = document.querySelectorAll("li");
console.log(allLiEl);

function initBackground() {
  for (var i = 0; i < allLiEl.length; i++) {
    allLiEl[i].classList.add("list-background");
  }
}
initBackground();

// Create one more unordered list and one more function
// The function​ should select only &lt;li&gt; elements from that last list
// Each &lt;li&gt; element should get a class that sets some bg color and transforms the
// text to uppercase.

var thirdList = document.querySelectorAll("ul")[2];
var thirListLiEl = thirdList.children;
console.log(thirListLiEl);

function setThirdListLiColor() {
  for (var i = 0; i < thirListLiEl.length; i++) {
    thirListLiEl[i].classList.add("third-list");
  }
}
setThirdListLiColor();
