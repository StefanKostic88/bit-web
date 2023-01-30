"use strcit";

var gallery = document.querySelector(".gallery");

var clearParent = function () {
  gallery.innerHTML = "";
};

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

// var x = fetch("https://api.github.com/search/users?q=dariodado")
//   .then((el) => el.json())
//   .then((data) => {
//     data.items.forEach((el) => {
//       console.log(el);
//       render(el.login, el.avatar_url);
//     });
//   });
// var a = fetch("https://api.github.com/users/dariodado/repos")
//   .then((el) => el.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((el, index) => {
//       // console.log(el.name);
//       // console.log(el.description);
//       var cardEl = document.createElement("div");
//       cardEl.setAttribute("class", "repo-card");
//       cardImgContainer = document.createElement("div");
//       cardImgContainer.setAttribute("class", "repo-card-img-container");
//       var img = document.createElement("img");
//       img.setAttribute(
//         "src",
//         "https://images.pexels.com/photos/11006505/pexels-photo-11006505.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
//       );
//       cardImgContainer.appendChild(img);
//       cardEl.appendChild(cardImgContainer);
//       var cardContent = document.createElement("div");
//       cardContent.setAttribute("class", "repo-card-content");
//       var cardTitle = document.createElement("h2");
//       cardTitle.setAttribute("class", "repo-card-title");
//       var spanEL = document.createElement("span");
//       spanEL.setAttribute("class", "repo-card-number");
//       spanEL.textContent = index + 1 + ": ";
//       cardTitle.appendChild(spanEL);
//       cardTitle.textContent += el.name;
//       var cardDes = document.createElement("p");
//       var des = el.description || "Not available";
//       var lang = document.createElement("p");

//       lang.setAttribute("class", "repo-card-lng");
//       lang.textContent = "Language: " + el.language;
//       cardDes.textContent = "description: " + des;
//       cardContent.appendChild(cardTitle);
//       cardContent.appendChild(cardDes);
//       cardContent.appendChild(lang);
//       cardEl.appendChild(cardContent);
//       gallery.appendChild(cardEl);
//     });
//   });

var searchBar = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");

var API = "https://api.github.com/search/users?q=";

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearParent();
  fetch(API + searchBar.value)
    .then((res) => res.json())
    .then((data) =>
      data.items.forEach((el) => {
        render(el.login, el.avatar_url);
      })
    );
});

gallery.addEventListener("click", function (e) {
  var userName = e.target.closest(".card").children[1].children[0].textContent;
  var url = " https://api.github.com/users/" + userName + "/repos";
  console.log(url);
  clearParent();
  fetch(url)
    .then((el) => el.json())
    .then((data) => {
      console.log(data);
      data.map((el, index) => {
        // console.log(el.name);
        // console.log(el.description);
        var cardEl = document.createElement("div");
        cardEl.setAttribute("class", "repo-card");
        cardImgContainer = document.createElement("div");
        cardImgContainer.setAttribute("class", "repo-card-img-container");
        var img = document.createElement("img");
        img.setAttribute(
          "src",
          "https://media.istockphoto.com/id/522876116/photo/silver-bank-vault-front.jpg?b=1&s=612x612&w=0&k=20&c=5TdaYLoQNKyfAl_zQshZvrUQki8lsGYpOC2OZECZ8Kg="
        );
        cardImgContainer.appendChild(img);
        cardEl.appendChild(cardImgContainer);
        var cardContent = document.createElement("div");
        cardContent.setAttribute("class", "repo-card-content");
        var cardTitle = document.createElement("h2");
        cardTitle.setAttribute("class", "repo-card-title");
        var spanEL = document.createElement("span");
        spanEL.setAttribute("class", "repo-card-number");
        spanEL.textContent = index + 1 + ": ";
        cardTitle.appendChild(spanEL);
        cardTitle.textContent += el.name;
        var cardDes = document.createElement("p");
        var des = el.description || "Not available";
        var lang = document.createElement("p");

        lang.setAttribute("class", "repo-card-lng");
        var usedLang = el.language || "Not available";
        lang.textContent = "Language: " + usedLang;
        cardDes.textContent = "description: " + des;
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDes);
        cardContent.appendChild(lang);
        cardEl.appendChild(cardContent);
        gallery.appendChild(cardEl);
      });
    });
});
