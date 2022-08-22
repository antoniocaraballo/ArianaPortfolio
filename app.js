const navMenu = document.querySelector("#nav-menu");

function openNav() {
  navMenu.style.right = "0%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navMenu.style.right = "-50%";
  document.body.style.overflow = "scroll";
}
