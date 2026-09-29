const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

const lineOne = document.getElementById("lineOne");
const lineTwo = document.getElementById("lineTwo");

const menuLinks = document.querySelectorAll(".big-menu");

function openMenu() {
  menuOverlay.classList.add("menu-open");

  document.body.classList.add("overflow-hidden");

  lineOne.classList.add("rotate-45");
  lineOne.classList.add("translate-y-[5px]");

  lineTwo.classList.add("-rotate-45");
  lineTwo.classList.add("-translate-y-[5px]");
}

function closeMenuFunction() {
  menuOverlay.classList.remove("menu-open");

  document.body.classList.remove("overflow-hidden");

  lineOne.classList.remove("rotate-45");
  lineOne.classList.remove("translate-y-[5px]");

  lineTwo.classList.remove("-rotate-45");
  lineTwo.classList.remove("-translate-y-[5px]");
}

menuButton.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMenuFunction);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      closeMenuFunction();
    }, 200);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenuFunction();
  }
});
