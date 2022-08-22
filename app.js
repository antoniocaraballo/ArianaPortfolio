const navMenu = document.querySelector("#nav-menu");

function openNav() {
  navMenu.style.right = "0%";
  //   navMenu.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navMenu.style.right = "-50%";
  //   navMenu.style.display = "none";
  document.body.style.overflow = "scroll";
}
