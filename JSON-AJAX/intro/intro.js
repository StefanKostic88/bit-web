"use strict";

// console.log("Test1");
// console.log("Test2");
// setTimeout(() => {
//   console.log("Test3");
// }, 3000);

// console.log("Test4");

//Stari nacin
/*
//xml nekada davno se koristio xml kao format za izmenu podataka
//sada se koristi JS Object Notation - JSON

// JSON svi key i value parovi su u navodnicama, osim brojeva i boleana

var newXHR = new XMLHttpRequest();

newXHR.open("GET", "https://jsonplaceholder.typicode.com/todos");

newXHR.onload = function () {
  var a = JSON.parse(newXHR.responseText);
  console.log(a);
};

newXHR.send();
*/

//JQuery
/*
$.get("https://jsonplaceholder.typicode.com/todos", function (data) {
  console.log(data);
});
*/

//Fetch

/*

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

//Axios biblioteka za komunikaciju sa serverom

// axios.get("https://jsonplaceholder.typicode.com/todos").then(function (res) {
//   console.log(res);
// });
// .catch().then();
