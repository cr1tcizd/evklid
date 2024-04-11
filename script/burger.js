window.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#burger').addEventListener("click", function(event) {
    document.querySelector('#menu').classList.toggle("burger-menu-active");
    document.querySelector('#burger').classList.toggle("header__burger");
    document.querySelector('#burger').classList.toggle("burger-active");
  })
})