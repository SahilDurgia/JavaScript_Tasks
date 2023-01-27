const text = document.querySelector("#task-1 h1:first-child");

const newBtn = document.querySelector("#task-1 button:nth-child(2)");

const oldbtn = document.querySelector("#task-1 button:last-child");

newBtn.addEventListener("click", function () {
  text.innerText = "New Content";
});

oldbtn.addEventListener("click", function () {
  text.innerText = "Old Content";
});

/////////////////////////////////////////////////////////////////////////////

const content = document.querySelector("#task-2 h1:first-child");
const incrementbtn = document.querySelector("#task-2 button:nth-child(2)");

const decrementbtn = document.querySelector("#task-2 button:last-child");

let clickedtimes = 0;

incrementbtn.addEventListener("click", function () {
  clickedtimes = clickedtimes + 1;
  content.innerText = `You have Clicked ${clickedtimes} Times`;
});

decrementbtn.addEventListener("click", function () {
  if (clickedtimes > 0) {
    clickedtimes = clickedtimes - 1;
    content.innerText = `You have Clicked ${clickedtimes} Times`;
  }
});
////////////////////////////////////////////////////////////////////////////////////
const text1 = document.querySelector("#task-3 h1:first-child");

const newBtn1 = document.querySelector("#task-3 button:nth-child(2)");

const oldbtn1 = document.querySelector("#task-3 button:last-child");

// oldbtn1.addEventListener("click", function () {
//   if (text1.innerHTML == "New Content") {
//     text1.innerText = "Old Content";
//   } else {
//     text1.innerText = "New Content";
//   }
// });
// const w = function () {
//   oldbtn1.addEventListener("click", function () {
//     text1.innerText = `New Contect`;
//     oldbtn1.addEventListener("click", function () {
//       text1.innerText = `old Contect`;
//     });
//   });
// };
/////////////////////////////////
oldbtn1.addEventListener("click", function () {
  if (text1.innerText == "New Content") {
    text1.innerText = `Old Contect`;
  } else {
    text1.innerText = `New Content`;
  }
});
//   oldbtn1.addEventListener("click", function () {
//     text1.innerHTML = `New Content`;
//   });
// });

///////////////////////////////////////////////////////
const passText = document.getElementById("passText");

const showpassbtn = document.getElementById("showpassbtn");

showpassbtn.addEventListener("click", function () {
  // passText.setAttribute("type", "text");
  if (passText.getAttribute("type") == "password") {
    passText.setAttribute("type", "text");
  } else {
    passText.setAttribute("type", "password");
  }
});
