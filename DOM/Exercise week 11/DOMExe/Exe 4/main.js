// "use strict";

//Appending
// var ulEl = document.querySelector("ul");
// var items = ["Home", "About", "Contact"];

// var addDropDownBefore = function (arr, node, type) {
//   var innerLiEl = document.createElement("li");
//   var dropDown = document.createElement("ul");
//   for (var i = 0; i < arr.length; i++) {
//     var tempEl = document.createElement("li");
//     tempEl.textContent = arr[i];
//     dropDown.append(tempEl);
//   }
//   innerLiEl.append(dropDown);
//   if (type === "before") {
//     node.insertBefore(innerLiEl, node.children[0]);
//   }
//   if (type === "after") {
//     node.append(innerLiEl);
//   }
// };

// // addDropDownBefore(items, ulEl, "before");
// // addDropDownBefore(items, ulEl, "after");

// //InnerHtml

// var addDropDownBeforeInner = function (arr, node, type) {
//   var innerLiEl = document.createElement("li");
//   var tempEl = "";
//   for (var i = 0; i < arr.length; i++) {
//     tempEl += "<li>" + arr[i] + "</li>";
//   }
//   innerLiEl.innerHTML = `<ul>` + tempEl + "</ul>";
//   if (type === "before") {
//     node.insertBefore(innerLiEl, node.children[0]);
//   }
//   if (type === "after") {
//     node.append(innerLiEl);
//   }
// };

// addDropDownBeforeInner(items, ulEl, "before");
// addDropDownBeforeInner(items, ulEl, "after");

// var addDropDownBeforeInner = function (arr, node, type) {
//   var innerLiEl = document.createElement("li");
//   var tempEl = "";
//   for (var i = 0; i < arr.length; i++) {
//     tempEl += "<li>" + arr[i] + "</li>";
//   }
//   innerLiEl.innerHTML = `<ul>` + tempEl + "</ul>";
//   if (type === "before") {
//     node.insertBefore(innerLiEl, node.children[0]);
//   }
//   if (type === "after") {
//     node.append(innerLiEl);
//   }
// };
