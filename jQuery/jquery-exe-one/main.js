$(function () {
  console.log("hi");

  var $firstLi = $("li:first");
  var $allLi = $("li");
  $firstLi.css({
    "border-bottom": "5px solid red",
  });
  $allLi.css({
    "text-transform": "uppercase",
  });
  var $activeLi = $(".active");
  $activeLi.css({ color: "red" });

  var middleElement = Math.floor($allLi.length / 2);

  $allLi.eq(middleElement).css({
    backgroundColor: "red",
  });
});
