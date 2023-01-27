// dom

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const contactNo = document.getElementById("contactNo");
const pincode = document.getElementById("pinCode");
const addresh = document.getElementById("addresh");

const parent1 = document.getElementById("parent");

const messsage = document.getElementById("messsage");

if (localStorage.getItem("fname") != null) {
  // first name
  let firstNameFromLS = localStorage.getItem("fname");
  fname.innerText = firstNameFromLS;
} else {
  parent1.remove();
  messsage.innerHTML = `<h1 class ="red">Please Fill All Details</h1>`;
}

// Last name
if (localStorage.getItem("lname") != null) {
  let lastNameFromLS = localStorage.getItem("lname");
  lname.innerText = lastNameFromLS;
} else {
  parent1.remove();
}

// Email
if (localStorage.getItem("email") != null) {
  let emailFromLS = localStorage.getItem("email");
  email.innerText = emailFromLS;
} else {
  parent1.remove();
}

// Constact No.
if (localStorage.getItem("contact") != null) {
  let contactNoFromLS = localStorage.getItem("contact");
  contactNo.innerText = contactNoFromLS;
} else {
  parent1.remove();
}

// Pin Code
if (localStorage.getItem("pinCode") != null) {
  let pincodeFromLS = localStorage.getItem("pinCode");
  pincode.innerText = pincodeFromLS;
} else {
  parent1.remove();
}

// Addresh
if (localStorage.getItem("addresh") != null) {
  let addreshFromLS = localStorage.getItem("addresh");

  addresh.innerText = addreshFromLS;
} else {
  parent1.remove();
}
