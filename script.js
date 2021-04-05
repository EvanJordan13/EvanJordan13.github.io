window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function onLinkClick() {
  document.getElementsByTagName('h2')[3].scrollIntoView();
  // will scroll to 4th h3 element
}