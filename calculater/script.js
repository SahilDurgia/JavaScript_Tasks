// dom

const numberparent = document.getElementById("numberparent");
const calcTextDisplay = document.getElementById("calcTextDisplay");
const results = document.getElementById("results");
let display;
numberparent.addEventListener("click", function (e) {
  //   console.log(e.target.innerText);

  let input = e.target.innerText;
  display = calcTextDisplay.value;
  if (input == "1") {
    calcTextDisplay.value = display + "1";
    // display = calcTextDisplay.innerText;
    calcTextDisplay.classList.remove("green");
  }
  if (input == "2") {
    display = calcTextDisplay.value = display + "2";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "3") {
    display = calcTextDisplay.value = display + "3";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "4") {
    display = calcTextDisplay.value = display + "4";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "5") {
    display = calcTextDisplay.value = display + "5";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "6") {
    display = calcTextDisplay.value = display + "6";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "7") {
    display = calcTextDisplay.value = display + "7";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "8") {
    display = calcTextDisplay.value = display + "8";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "9") {
    display = calcTextDisplay.value = display + "9";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "0") {
    display = calcTextDisplay.value = display + "0";
    calcTextDisplay.classList.remove("green");
  }

  if (input == "+") {
    display = calcTextDisplay.value = display + "+";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "-") {
    display = calcTextDisplay.value = display + "-";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "×") {
    display = calcTextDisplay.value = display + "*";
  }
  if (input == "÷") {
    display = calcTextDisplay.value = display + "/";
    calcTextDisplay.classList.remove("green");
  }
  if (input == ".") {
    display = calcTextDisplay.value = display + ".";
    calcTextDisplay.classList.remove("green");
  }
  if (input == "CLEAR") {
    display = "null";
    calcTextDisplay.value = null;
    calcTextDisplay.classList.remove("green");
  }
  if (input == "=") {
    calcTextDisplay.value = eval(calcTextDisplay.value);
    // display = calcTextDisplay.value;
    calcTextDisplay.classList.add("green");
    // results.innerText = display;
  }
  //   results.innerText = display;
});
parent.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  if (e.key == "=") {
    calcTextDisplay.value = eval(calcTextDisplay.value);
    // display = calcTextDisplay.value;
    calcTextDisplay.classList.add("green");
  }
});
