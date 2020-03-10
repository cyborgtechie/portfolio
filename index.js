//////////// MOBILE NAV FUNCTIONALITY ////////////
function displayProjects() {
  $(document).ready(function() {
    $(".proj-demo").append(`<img src='./imgs/app-sc.png'>`);
    $(".proj-desc").append(` 
  <h3 class="proj-header">What's it about?</h3>
  <p>A quiz app that tests your knowledge on all things sleep—from dreams
  and nightmares, sleep deprivation, and more. Find out if you know
  what really goes on while you sleep.</p>`);
    $(".proj-tech").append(`<h3 class="proj-header">Tech Stack</h3>
  <ul>
  <li><i class="fab fa-js"></i></li>
  <li><i class="fab fa-html5"></i></li>
  <li><i class="fab fa-css3-alt"></i></li>
  <li><i class="fab fa-github"></i></li> 
</ul>
    <p> jQuery, JavaScript, HTML5, CSS3, Git, Github</p>`);
  });
}

function mobileMenuToggled() {
  $("#toggle").on("click", function() {
    $(this).toggleClass("toggle-active");
    $("#overlay")
      .toggleClass("nav-overlay-active")
      .show();
  });

  $("#overlay").on("scroll touchmove mousewheel", function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  // Close after clicking on a menu option
  $("nav li ").on("click", function() {
    $(this).show();
    let width = $(window).width();
    if (width < 913) {
      $("#overlay")
        .toggleClass("nav-overlay-active")
        .hide();
      $(".hamburger").toggleClass("toggle-active");
    }
  });
}
$(displayProjects);
$(mobileMenuToggled);
