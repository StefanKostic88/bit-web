"use strict";
// On-page Script
// ● Create a script tag on the page
// ● It should contain code that console.log’s some text
// ● Wrap the previous script in a function
// ● When page is loaded, trigger the function
// External JS Files
// ● Include an external JS script on the page.
// ● The script should contain a function that uses console.log to print something.
// ● Trigger that function.

// function trgiger() {
//   console.log(20 + 50);
// }

// window.addEventListener("load", trgiger);

// function sayHi() {
//   console.log("Helloo world");
// }
// sayHi();

// window.navigator
// Create a function that prints out in the console the following information
// ● the platform on which the browser is running
// ● the information about the browser version
// ● the company that created that browser
// Each piece of information should be printed out in a new row.
// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is

// console.log(window.navigator.platform);
// console.log(window.navigator.appVersion);
// console.log(window.navigator.vendor);

// window.screen
// Create a function that prints out the following information in the console:
// ● current browser width and height
// ● max possible browser height

// console.log(window.screen.availHeight, window.screen.availWidth);
// console.log(window.screen.height, window.screen.width);

// window.location
// Write a function that prints out website’s url information in the console:

// ● full url address
// ● domain name
// ● used protocol
// ● parameters which are part of URL.
// Create a function for reloading the page.
// Create a function that redirects you to a website address passed to it.
// Test all three functions

// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.protocol);
// console.log(window.location.pathname);

// window.localStorage
// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print &quot;There is no data&quot; in the console.
// Create a function that removes data from the local storage.
// Use the previously created functions to store/read/remove some data.
// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the
// stored value.
// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.

// var setSomething = function (data) {
//   var storage = localStorage.setItem("SomeVal", JSON.stringify(data));
// };

// // setSomething([50, 25, 65, 65, 50, 40]);

// var printData = function () {
//   var storageVal = JSON.parse(localStorage.getItem("SomeVal"));
//   console.log(storageVal);
//   if (storageVal) {
//   } else {
//     console.log("There is no data ");
//   }
// };

// printData();

// var removeDataSes = function () {
//   localStorage.removeItem("SomeVal");
// };
// removeData();

// var setSomethingSes = function (data) {
//   var storage = sessionStorage.setItem("SomeVal", JSON.stringify(data));
// };
// setSomethingSes([50, 25, 65, 65, 50, 40]);

// var printDataSes = function () {
//   var storageVal = JSON.parse(sessionStorage.getItem("SomeVal"));
//   console.log(storageVal);
//   if (storageVal) {
//   } else {
//     console.log("There is no data ");
//   }
// };

// printDataSes();

// var removeDataSes = function () {
//   sessionStorage.removeItem("SomeVal");
// };
// removeDataSes();

console.log();

function rnd() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr[arr.length] = Math.round(Math.random() * 49) + 1;
  }
  return arr;
}

var x = rnd();
console.log(x);

function generate() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    var el = Math.random() * 50;
    arr[arr.length] = el.toFixed(2);
  }
  return arr;
}
var a = generate();
console.log(a);

function flo(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[newArr.length] = Math.floor(arr[i]);
  }
  return newArr;
}

var t = flo(a);
console.log(t);

console.log(Math.max(...[1, 25, 50]));

// Date
// ● Print out the whole date object in the console.

// ● Print out the current time in the console.
// ● Print out the current date in the console.
console.log(Date());
console.log(new Date().getDate());
console.log(
  new Date().getHours(),
  new Date().getMinutes(),
  new Date().getSeconds()
);
