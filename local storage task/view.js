// get the element from the local storage

// convert it into array

// using loop loop set the inner text to that array

const emp = document.getElementById("emp");

const message = document.getElementById("message");

let employees = localStorage.getItem("employees");
if (employees != null) {
  //   console.log(employees);
  let employeesArray = JSON.parse(employees);
  //   console.log(employeesArray);
  employeesArray.forEach(function (element) {
    // console.log(element);
    emp.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
  });
} else {
  message.innerText = `No Employess Added Yet`;
}
