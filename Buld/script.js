const buldimg = document.querySelector(".bulbOff");

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  buldimg.classList.toggle("bulbOff");
  buldimg.classList.toggle("onBulb");
});
