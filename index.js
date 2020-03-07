//////////// MOBILE NAV FUNCTIONALITY ////////////

$("#toggle").click(function() {
  $(this).toggleClass("toggle-active");
  $("#overlay")
    .toggleClass("nav-overlay-active")
    .show();
});

// Close after clicking on a menu option
$(".nav-overlay li").on("click", function() {
  $("#overlay").hide();
});
