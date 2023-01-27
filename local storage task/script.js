const employeeName = document.getElementById("employeeName");

const addemployeebtn = document.getElementById("addemployeebtn");

const clearEmployes = document.getElementById("clearEmployes");
// let names = [];

addemployeebtn.addEventListener("click", function () {
  // get Input Value
  let inputValue = employeeName.value;
  // check if user has already added employes
  let emp = localStorage.getItem("employees");

  // If  Employes are alredy added
  if (emp != null) {
    // convert the string into array

    let empArray = JSON.parse(emp);
    // push new employee to that array
    empArray.push(inputValue);
    // convert Array Into String
    let empStr = JSON.stringify(empArray);
    // Store it in a local storage

    localStorage.setItem("employees", empStr);
  } else {
    // else {we are adding first emp}
    // create an empty array
    let empArray = [];
    // push the value in array
    empArray.push(inputValue);
    // convert to string
    let empStr = JSON.stringify(empArray);
    // Store It In LcoaL sTORAGE});
    localStorage.setItem("employees", empStr);
  }
});

clearEmployes.addEventListener("click", function () {
  localStorage.removeItem("employees");
});
