"use strcit";

(function (ui) {
  ////////
  //init App
  var galleryApp = ui.generateGalleryView();

  var getApiData = function (url) {
    return fetch(url).then((res) => res.json());
  };

  //Search users

  var controlSearchUsers = function (input) {
    galleryApp.clearParent();
    var url = "https://api.github.com/search/users?q=" + input;
    getApiData(url).then((data) => {
      data.items.forEach((el) => {
        galleryApp.renderUsers(el.login, el.avatar_url);
      });
    });
  };

  //Search repos

  var controlUsersRepo = function (userName) {
    var url = " https://api.github.com/users/" + userName + "/repos";
    galleryApp.clearParent();
    getApiData(url).then((data) => {
      data.forEach((el, index) => {
        galleryApp.renderRepo(el.name, el.description, el.language, index);
      });
    });
  };

  //Event listeners

  galleryApp.searchUserSubmitHandler(controlSearchUsers);
  galleryApp.getUsersRepoHandler(controlUsersRepo);
})(view);
