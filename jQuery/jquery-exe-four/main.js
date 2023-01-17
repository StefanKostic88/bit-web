$(function () {
  $(".gallery-one")
    .css({
      margin: "0 auto",
      display: "flex",
      width: "1600px",
    })
    .find("img")
    .css({
      width: "33%",
    });
  $(".gallery-two")
    .css({
      margin: "0 auto",
      display: "flex",
      width: "1600px",
      marginTop: "25px",
    })
    .find("img")
    .css({
      width: "33%",
    });

  $("body")
    .find("div")
    .find("img")
    .on("click", function () {
      if ($(this).hasClass("selected")) {
        console.log(this);
        $(this).removeClass("selected");
      }
      console.log(
        $(".gallery-two").find("img:nth-child(2)").addClass("selected")
      );
    });
});

// selected
