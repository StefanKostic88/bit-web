$(function () {
  var $galeryContainer = $("<div></div>");
  $galeryContainer.addClass(".gallery");
  $("body").append($galeryContainer);
  $galeryContainer.prepend("<h2>Gallery Title</h2>");
  $galeryContainer.find("h2").css({
    marginLeft: "50%",
    transform: "translateX(-15%)",
  });

  function addImmg(node, imgUrl) {
    $img = $("<img/>");
    $img.attr("src", imgUrl);
    node.append($img);
  }

  var imgUrlarr = [
    "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  imgUrlarr.forEach(function (el) {
    addImmg($galeryContainer, el);
  });

  function setWidthAndHight() {
    return Math.round(Math.random() * (750 - 150 + 1) + 150);
  }

  $galeryContainer.find("img").each(function (index, el) {
    var newEl = $(el);
    newEl.height(setWidthAndHight());
    newEl.width(setWidthAndHight());

    if (newEl.width() < 250) {
      newEl.css({
        border: "3px solid green",
      });
    }
  });
});

//   $img = $("<img/>");
//   console.log(
//     $img.attr(
//       "src",
//       "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600"
//     )
//   );
//   $galeryContainer.append($img);

//   addImmg(
//     $galeryContainer,
//     "https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600"
//   );

//   When the gallery is created and visible on the page, create gallery title and
//   insert it before the gallery images
