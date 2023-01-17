$(function () {
  var $fieldEl = $(".img-container");
  var $playerEl = $("#player");
  var $buttonEl = $("button");

  var movePlayer = function (e) {
    if (e.target.classList.contains("disable")) return;
    $playerEl.css({
      top: e.offsetY + "px",
      left: e.offsetX + "px",
    });

    if (e.target.classList.contains("disable")) {
      $playerEl.css({
        top: "40px",
        left: "40px",
      });
    }
  };

  $fieldEl.on("click", movePlayer);

  $buttonEl.on("click", function () {
    $fieldEl.off("click", movePlayer);
  });
});
