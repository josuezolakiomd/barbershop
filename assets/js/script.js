const btnBook = document.querySelectorAll(".btn-book");
const humbMenu = document.querySelector(".humb-menu");
const smDeviceMenu = document.querySelector(".sm-device-menu");
const smDeviceLinks = document.querySelector(".sm-device-links");

btnBook.forEach((element) => {
  element.addEventListener("click", function () {
    window.open("https://calendar.app.google/LupWmvQeN8qYnhCD8", "_blank");
  });
});

const OpenCloseHambMenu = () => {
  if (smDeviceMenu.classList.contains("sm-device-menu-clicked")) {
    smDeviceMenu.classList.remove("sm-device-menu-clicked");
  } else {
    smDeviceMenu.classList.add("sm-device-menu-clicked");
  }
};

humbMenu.addEventListener("click", OpenCloseHambMenu);
humbMenu.addEventListener("click", OpenCloseHambMenu);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stops observing after first appearance
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
