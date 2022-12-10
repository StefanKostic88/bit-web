"use strict";
const htmlNode = window.document.documentElement; //uvek sadrzi root node, ili html node, jedini nacin da ovako selektujemo ovaj node
console.log("htmlNode:", htmlNode);
console.log(htmlNode.tagName);
console.log(htmlNode.attributes);
console.log(htmlNode.id);
console.log(htmlNode.className);

console.log(htmlNode.hasChildNodes());
console.log(htmlNode.childNodes);
