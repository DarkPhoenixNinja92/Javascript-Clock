const clock = document.querySelector(".clock");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
let currentDate = new Date();
let time = currentDate.getTime();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();
hour.innerHTML = currentHour;
minute.innerHTML = currentMinute;
second.innerHTML = currentSecond;

function modeSwap() {
    if (currentHour > 12) {
        currentHour -= 12;
        hour.innerHTML = currentHour;
    }
}

function reverseSwap() {
    if (currentHour <= 12) {
        currentHour += 12;
        hour.innerHTML = currentHour;
    }
}