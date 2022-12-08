var btn = document.querySelector(".navbar-toggler");
btn.addEventListener("click", function () {
  document.getElementById("heading").classList.toggle("hide-heading");
  document.getElementById("nav").classList.toggle("streach-nav");
});
