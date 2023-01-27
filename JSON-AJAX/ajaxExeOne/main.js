"use script";

var btn = document.getElementById("get-data");

navigator.geolocation.getCurrentPosition((position) => {
  var { latitude: lat, longitude: leng } = position.coords;
  var map = L.map("map").setView([lat, leng], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([lat, leng]).addTo(map);
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
});

var getGeoData = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    var { latitude: lat, longitude: leng } = position.coords;
    console.log(lat, leng);
  });
};

btn.addEventListener("click", getGeoData);
