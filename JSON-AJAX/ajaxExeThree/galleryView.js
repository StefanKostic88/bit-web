var view = (function () {
  class Gallery {
    _gallery = document.querySelector(".gallery");

    searchUserSubmitHandler(handler) {
      document
        .getElementById("search-btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          var input = document.getElementById("search-input").value;
          handler(input);
        });
    }
    getUsersRepoHandler(handler) {
      document
        .querySelector(".gallery")
        .addEventListener("click", function (e) {
          var userName =
            e.target.closest(".card").children[1].children[0].textContent;
          handler(userName);
        });
    }
    getRepoHandler() {
      this._gallery.addEventListener("click", function (e) {});
    }

    clearParent = function () {
      this._gallery.innerHTML = "";
    };

    renderUsers(login, avatar) {
      //create and set atr for user card
      var cardEl = document.createElement("div");
      cardEl.setAttribute("class", "card");
      //create and set atr for user card img container
      var cardImgContainer = document.createElement("div");
      cardImgContainer.setAttribute("class", "card-img-container");
      //create and set atr for user card img
      var img = document.createElement("img");
      img.setAttribute("src", avatar);

      //create and set atr for user card content
      var cardContent = document.createElement("div");
      cardContent.setAttribute("class", "card-content");
      //create and set atr for user card title
      var cardTitle = document.createElement("h2");
      cardTitle.setAttribute("class", "card-title");
      cardTitle.textContent = login;

      //appending elments
      cardImgContainer.appendChild(img);
      cardEl.appendChild(cardImgContainer);
      cardContent.appendChild(cardTitle);
      cardEl.appendChild(cardContent);
      this._gallery.appendChild(cardEl);
    }
    renderRepo(name, description, lg, index) {
      var cardEl = document.createElement("div");
      cardEl.setAttribute("class", "repo-card");
      var cardImgContainer = document.createElement("div");
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
      cardTitle.textContent += name;
      var cardDes = document.createElement("p");
      var des = description || "Not available";
      var lang = document.createElement("p");

      lang.setAttribute("class", "repo-card-lng");
      var usedLang = lg || "Not available";
      lang.textContent = "Language: " + usedLang;
      cardDes.textContent = "description: " + des;
      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardDes);
      cardContent.appendChild(lang);
      cardEl.appendChild(cardContent);
      this._gallery.appendChild(cardEl);
    }
  }

  var generateGalleryView = function () {
    return new Gallery();
  };

  return { generateGalleryView };
})();
