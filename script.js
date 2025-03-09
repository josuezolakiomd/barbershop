const btnBook = document.querySelectorAll(".btn-book");
const humbMenu = document.querySelector(".humb-menu");
const smDeviceMenu = document.querySelector(".sm-device-menu");
const smDeviceLinks = document.querySelector(".sm-device-links");

btnBook.forEach((element) => {
  element.addEventListener("click", function () {
    window.open(
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3sBdm-vGLpPR7rwAtaEBeCgD8pyBwsA-TqiKo9AGs6m3FZeaQcZhe0MDY-lDgEnhka2fLwMFy4?gv=true",
      "_blank"
    );
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
