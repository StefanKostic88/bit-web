"use strict";

fetch("https://jsonplaceholder.typicode.com/posts/3")
  .then((response) => response.json())
  .then((json) => console.log(json));

//   json placeholder sajt igraj se sa tim malo
