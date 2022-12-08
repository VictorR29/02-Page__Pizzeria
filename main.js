const mobileMenu = document.querySelector(".menu__icon--container");
const counterDay = document.getElementById("day");
const counterHour = document.getElementById("hour");
const counterMinute = document.getElementById("minute");
const counterSecond = document.getElementById("second");
const dateTarget = new Date('12/08/2023 0:30 AM');

/* TOGGLE MENU */

mobileMenu.addEventListener("click", ()=> {
  mobileMenu.classList.toggle("open");
});


/* COUNTER SPECIAL OFFER */

const msSecond = 1000;
const msMinute = msSecond * 60;
const msHour = msMinute * 60;
const msDay = msHour * 24;


function updateCountdown() {
    const now = new Date();
    const duration = dateTarget - now;
    const remainingDays = Math.floor(duration / msDay);
    const remainingHours = Math.floor((duration % msDay) / msHour);
    const remainingMinutes = Math.floor((duration % msHour) / msMinute);
    const remainingSeconds = Math.floor((duration % msMinute) / msSecond);

    counterDay.value = remainingDays;
    counterHour.value = remainingHours;
    counterMinute.value = remainingMinutes;
    counterSecond.value = remainingSeconds;
}

updateCountdown();

setInterval(updateCountdown, msSecond);
