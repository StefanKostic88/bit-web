"use strcit";

var gallery = document.querySelector(".gallery");

var render = function (login, avatar) {
  var cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  cardImgContainer = document.createElement("div");
  cardImgContainer.setAttribute("class", "card-img-container");
  var img = document.createElement("img");
  img.setAttribute("src", avatar);
  cardImgContainer.appendChild(img);
  cardEl.appendChild(cardImgContainer);
  var cardContent = document.createElement("div");
  cardContent.setAttribute("class", "card-content");
  var cardTitle = document.createElement("h2");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = login;
  cardContent.appendChild(cardTitle);
  cardEl.appendChild(cardContent);
  gallery.appendChild(cardEl);
};

var x = fetch("https://api.github.com/search/users?q=dariodado")
  .then((el) => el.json())
  .then((data) => {
    data.items.forEach((el) => {
      console.log(el);
      render(el.login, el.avatar_url);
    });
  });
var a = fetch("https://api.github.com/users/dariodado/repos")
  .then((el) => el.json())
  .then((data) => {
    console.log(data);
  });

var searchBar = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");

var API = "https://api.github.com/search/users?q=";

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(API + searchBar.value)
    .then((res) => res.json())
    .then((data) =>
      data.items.forEach((el) => {
        render(el.login, el.avatar_url);
      })
    );
});
