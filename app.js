const navMenu = document.querySelector("#nav-menu");

function openNav() {
  navMenu.style.right = "0%";
  console.log("hello");
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navMenu.style.right = "-50%";
  console.log("hello");
  document.body.style.overflow = "scroll";
}
