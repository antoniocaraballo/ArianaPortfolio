const navMenu = document.querySelector(".nav-menu");

function openNav() {
  navMenu.style.right = "0%";
  navMenu.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navMenu.style.right = "-50%";
  navMenu.style.visibility = "hidden";
  document.body.style.overflow = "scroll";
}
