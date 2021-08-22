const menuOpen = document.querySelector(".lni-menu");
const nav = document.querySelector("nav");
const iconClose = document.querySelector(".lni-close");

menuOpen.addEventListener("click", function () {
  nav.style.display = "block";
  nav.style.marginTop = "10px";
  this.style.display = "none";
  iconClose.style.display = "block";
});

iconClose.addEventListener("click", function () {
  this.style.display = "none";
  nav.style.display = "none";
  menuOpen.style.display = "block";
});
