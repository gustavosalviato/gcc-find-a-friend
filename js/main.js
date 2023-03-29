const navLink = document.querySelector("#navlink");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

function handleOpenMenu() {
  navLink.classList.toggle("invisible-nav-link");
  openMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
}
