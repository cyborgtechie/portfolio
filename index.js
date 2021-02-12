//////////// MOBILE NAV FUNCTIONALITY ////////////
function displayProjects() {
  $(document).ready(function () {
    $(".d1").append(
      `<img src='./imgs/app-sc.png' alt="screenshot of sleep quiz project">`
    );
    $(".pd1").append(` 
  <h3 class="proj-header">What's it about?</h3>
  <p>A quiz app that tests your knowledge on all things sleep—from dreams
  and nightmares, sleep deprivation, and more. Find out if you know
  what really goes on while you sleep.</p>`);
    $(".t1").append(`<h3 class="proj-header">Tech Stack</h3>
  <ul>
  <li><i class="fab fa-js"></i></li>
  <li><i class="fab fa-html5"></i></li>
  <li><i class="fab fa-css3-alt"></i></li>
  <li><i class="fab fa-github"></i></li> 
</ul>
    <p> jQuery, JavaScript, HTML5, CSS3, Git, Github</p>`);
  });
  $(document).ready(function () {
    $(".d2").append(
      `<img src='./imgs/proj2-sc.png' alt="screenshot of find us project">`
    );
    $(".pd2").append(` 
  <h3 class="proj-header">What's it about?</h3>
  <p>An app that provides you information on missing persons in your area or state. This app includes their last known location, description of the person, and resources you can utilize to help find them.</p>`);
    $(".t2").append(`<h3 class="proj-header">Tech Stack</h3>
  <ul>
  <li><i class="fab fa-js"></i></li>
  <li><i class="fab fa-html5"></i></li>
  <li><i class="fab fa-css3-alt"></i></li>
  <li><i class="fab fa-github"></i></li> 
</ul>
    <p>Javascript, JQuery, HTML5, CSS, Chart.js, Fetch API, Git</p>`);
  });
}

function mobileMenuToggled() {
  $("#toggle").on("click", function () {
    $(this).toggleClass("toggle-active");
    $("#overlay").toggleClass("nav-overlay-active").show();
  });

  $("#overlay").on("scroll touchmove mousewheel", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  // Close after clicking on a menu option
  $("nav li ").on("click", function () {
    $(this).show();
    let width = $(window).width();
    if (width < 913) {
      $("#overlay").toggleClass("nav-overlay-active").hide();
      $(".hamburger").toggleClass("toggle-active");
    }
  });
}
$(displayProjects);
$(mobileMenuToggled);
