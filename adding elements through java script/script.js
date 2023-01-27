const btn = document.getElementById("btn");
const place = document.getElementById("place");

// btn.addEventListener("click", function () {
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//       place.insertAdjacentHTML("beforeend", `<h1 class='even'>${i}</h1>`);
//     } else {
//       place.insertAdjacentHTML("beforeend", `<h1 class='odd'>${i}</h1>`);
//     }
//   }
// });

// //
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const direction = document.getElementById("direction");
// btn.addEventListener("click", function () {
//   let a = +input1.value;
//   let b = +input2.value;
//   console.log(a, b);
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       place.insertAdjacentHTML("beforeend", `<h1 class='even'>${i}</h1>`);
//     } else {
//       place.insertAdjacentHTML("beforeend", `<h1 class='odd'>${i}</h1>`);
//     }
//   }
// //   console.log(direction.value);
// });
///
const errorspace = document.getElementById("errorspace");
btn.addEventListener("click", function () {
  let a = +input1.value;
  let b = +input2.value;
  console.log(a, b);
  if (a < b) {
    if (direction.value == "forward") {
      for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
          place.insertAdjacentHTML("beforeend", `<h1 class='even'>${i}</h1>`);
        } else {
          place.insertAdjacentHTML("beforeend", `<h1 class='odd'>${i}</h1>`);
        }
      }
    } else {
      for (let i = b; i >= a; i--) {
        if (i % 2 == 0) {
          place.insertAdjacentHTML("beforeend", `<h1 class='even'>${i}</h1>`);
        } else {
          place.insertAdjacentHTML("beforeend", `<h1 class='odd'>${i}</h1>`);
        }
      }
    }
  } else {
    errorspace.innerHTML = `<h3>Value 2 Cannot be Less Than Value 1 </h3>`;
  }
});
