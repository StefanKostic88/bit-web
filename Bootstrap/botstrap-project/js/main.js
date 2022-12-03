var btn = document.querySelector(".navbar-toggler");

btn.addEventListener("click", function (e) {
  document.querySelector("h2").classList.toggle("hide-heading");
});
