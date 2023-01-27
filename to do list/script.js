// Doms
const tastinput = document.getElementById("tastinput");

const todobtn = document.getElementById("todobtn");

const addtodo = document.getElementById("addtodo");

// Intializing array for data to keep
let todoArrayWork = [];

// display data if there is something in local storage

if (localStorage.getItem("todo") != null) {
  let data = JSON.parse(localStorage.getItem("todo"));
  // console.log(`if there is data in local storage - ${data}`);

  data.forEach(function (element) {
    // Adding Each Element To that Array if there is in Local Storgae
    todoArrayWork.push(element);
    // Adding in the html Page
    addtodo.insertAdjacentHTML(
      "beforeend",
      `<div id="task">
  <img src="./tick.png" alt="" />
  <p id="para">${element}</p>
  <img src="./deleticon.png" alt="" />
</div> `
    );
  });
}

//

//  Adding Event/ To Do Work / In The page using Click Event
todobtn.addEventListener("click", function () {
  let tastinputValue = tastinput.value;

  let a = `<div id="task">
  <img src="./tick.png" alt="" />
  <p id="para">${tastinputValue}</p>
  <img src="./deleticon.png" alt="" />
</div> `;
  addtodo.insertAdjacentHTML("beforeend", a);

  todoArrayWork.push(tastinputValue);
  // console.log(`array after adding data - ${todoArrayWork}`);
  localStorage.setItem("todo", JSON.stringify(todoArrayWork));
});

// Tick And Delet Btn Function
addtodo.addEventListener("click", function (e) {
  // console.dir(e.target);

  let tick = "file:///D:/local%20storage/to%20do%20list/tick.png";
  let delet = "file:///D:/local%20storage/to%20do%20list/deleticon.png";
  if (e.target.currentSrc == tick) {
    e.target.nextElementSibling.classList.toggle("text");
  }
  if (e.target.currentSrc === delet) {
    e.target.parentElement.remove();
    // todoArrayWork.pop();
    // console.log(todoArrayWork);
    // console.log(todoArrayWork);

    // console.log(`Array After Delet - ${todoArrayWork}`);

    // console.log(e.target.previousElementSibling.innerText);
    let text = e.target.previousElementSibling.innerText;

    // console.log(c);

    let i = todoArrayWork.indexOf(text, 0);
    // console.log(num);
    let dElement = todoArrayWork.splice(i, 1);
    let final = todoArrayWork.indexOf(dElement);
    todoArrayWork.splice(final, 0);
    // todoArrayWork.indexOf(c)
    // console.log(`Final Array After Delet ${todoArrayWork}`);
    localStorage.setItem("todo", JSON.stringify(todoArrayWork));
  }
});
