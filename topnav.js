
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    window.onscroll = function() {myFunction()};
  });

  window.onscroll = function() {myFunction()};

var forcedep = navbar
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}