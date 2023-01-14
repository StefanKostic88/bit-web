$(function () {
  var divElements = $("div");
  divElements.toggleClass("active");

  $("li").click(function () {
    $(this).remove();
  });

  console.log($("body").html());
  //   $("li").hide().delay(500).fadeIn(1500);
  $("li").delay(500).fadeOut(1500).delay(500).fadeIn(1500);
});
