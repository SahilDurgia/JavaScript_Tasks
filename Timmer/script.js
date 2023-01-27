const hours = document.querySelector(".parent div:first-child P");

const minutes = document.querySelector(".parent div:nth-child(2) P");

const seconds = document.querySelector(".parent div:last-child P");

setInterval(() => {
  const date = new Date();
  hours.innerText = date.getHours();
  minutes.innerText = date.getMinutes();
  seconds.innerText = date.getSeconds();
}, 1000);

// //////////
const hours12 = document.querySelector(".parent2 div:first-child P");

const minutes12 = document.querySelector(".parent2 div:nth-child(2) P");

const seconds12 = document.querySelector(".parent2 div:nth-child(3) P");

const amPM = document.querySelector(".parent2 div:last-child P");

const twelevehourstime = function () {
  const date = new Date();
  hours12.innerText = date.getHours();
  if (hours12.innerText > 12) {
    amPM.innerText = "PM";
  } else {
    amPM.innerText = "AM";
  }
  if (hours12.innerText == 13) {
    hours12.innerText = 1;
  }
  if (hours12.innerText == 14) {
    hours12.innerText = 2;
  }
  if (hours12.innerText == 15) {
    hours12.innerText = 3;
  }
  if (hours12.innerText == 16) {
    hours12.innerText = 4;
  }
  if (hours12.innerText == 17) {
    hours12.innerText = 5;
  }
  if (hours12.innerText == 18) {
    hours12.innerText = 6;
  }
  if (hours12.innerText == 19) {
    hours12.innerText = 7;
  }
  if (hours12.innerText == 20) {
    hours12.innerText = 8;
  }
  if (hours12.innerText == 21) {
    hours12.innerText = 9;
  }
  if (hours12.innerText == 22) {
    hours12.innerText = 10;
  }
  if (hours12.innerText == 23) {
    hours12.innerText = 11;
  }
  if (hours12.innerText == 24) {
    hours12.innerText = 12;
  }
  minutes12.innerText = date.getMinutes();
  seconds12.innerText = date.getSeconds();
};
setInterval(twelevehourstime, 1000);

// /////////////

const dateFUll = document.querySelector(".parent3 div:first-child P");

const monthFUll = document.querySelector(".parent3 div:nth-child(2) P");

const dayFUll = document.querySelector(".parent3 div:nth-child(3) P");

const yearFUll = document.querySelector(".parent3 div:nth-child(4) P");

const hoursFull = document.querySelector(".parent3 div:nth-child(5) P");

const minutesFull = document.querySelector(".parent3 div:nth-child(6) P");

const secondsFUll = document.querySelector(".parent3 div:nth-child(7) P");

const amPMFUll = document.querySelector(".parent3 div:last-child P");

const fulltimeanddate = function () {
  const date = new Date();
  dateFUll.innerText = date.getDate();
  yearFUll.innerText = date.getFullYear();
  monthFUll.innerText = date.toString().slice(4, 8);
  dayFUll.innerText = date.toString().slice(0, 3);
  hoursFull.innerText = date.getHours();

  if (hoursFull.innerText > 12) {
    amPMFUll.innerText = "PM";
  } else {
    amPMFUll.innerText = "AM";
  }
  if (hoursFull.innerText == 13) {
    hoursFull.innerText = 1;
  }
  if (hoursFull.innerText == 14) {
    hoursFull.innerText = 2;
  }
  if (hoursFull.innerText == 15) {
    hoursFull.innerText = 3;
  }
  if (hoursFull.innerText == 16) {
    hoursFull.innerText = 4;
  }
  if (hoursFull.innerText == 17) {
    hoursFull.innerText = 5;
  }
  if (hoursFull.innerText == 18) {
    hoursFull.innerText = 6;
  }
  if (hoursFull.innerText == 19) {
    hoursFull.innerText = 7;
  }
  if (hoursFull.innerText == 20) {
    hoursFull.innerText = 8;
  }
  if (hoursFull.innerText == 21) {
    hoursFull.innerText = 9;
  }
  if (hoursFull.innerText == 22) {
    hoursFull.innerText = 10;
  }
  if (hoursFull.innerText == 23) {
    hoursFull.innerText = 11;
  }
  if (hoursFull.innerText == 24) {
    hoursFull.innerText = 12;
  }
  minutesFull.innerText = date.getMinutes();
  secondsFUll.innerText = date.getSeconds();
};
setInterval(fulltimeanddate, 1000);
