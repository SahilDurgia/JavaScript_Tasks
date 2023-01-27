// Taking All Inputs To Dom

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const contactNo = document.getElementById("contactNo");
const pincode = document.getElementById("pincode");
const addresh = document.getElementById("addresh");

// Taking Buttons To Dom

const addDeatilsToLocalStorage = document.getElementById(
  "addDeatilsToLocalStorage"
);
const ViewAddeddetails = document.getElementById("ViewAddeddetails");
const RemoveFromLocalStorage = document.getElementById(
  "RemoveFromLocalStorage"
);

//  Taking All Divs For displaying Message for wrong Input into Dom
const fnameMessage = document.getElementById("fnameMessage");
const lnameMessage = document.getElementById("lnameMessage");
const emailMessage = document.getElementById("emailMessage");
const contactNoMessage = document.getElementById("contactNoMessage");
const pincodeMessage = document.getElementById("pincodeMessage");
const addreshMessage = document.getElementById("addreshMessage");

const commonErrorMessage = document.getElementById("commonErrorMessage ul");

const ul = document.getElementById("ul");
//  Making all Regex

const nameRegex = /^([a-zA-Z]{2,30})$/;
const emailRegex =
  /^([a-zA-Z0-9\.\_]{1,30})([@]{1})([a-zA-Z\_0-9]{1,30})([.]{1})([a-zA-Z]{1,10})$/;

const contactRegex = /^[0-9]{10}$/;

const pincodeRegex = /^([1-9]{1})([0-9]{2})([\s]{0,1})([0-9]{3})$/;

const addreshregex = /^([a-zA-Z0-9\.\s\\\/\-\(\)\[\]\{\}\,\?\>\<]{20,300})$/;

// Event Listner On Add Details To Local Storage

addDeatilsToLocalStorage.addEventListener("click", function (e) {
  e.preventDefault();
  // All Inputs Values

  let fnameValue = fname.value;
  let lnameValue = lname.value;
  let emailValue = email.value;
  let contactNoValue = contactNo.value;
  let pincodeValue = pincode.value;
  let addreshValue = addresh.value;

  // Checking First Name
  if (nameRegex.test(fnameValue)) {
    fnameMessage.innerHTML = null;
    // ul.removeChild(ul.childNodes[0]);
    ul.innerHTML = "";
    fname.classList.remove("red");
    fname.classList.add("green");
    localStorage.setItem("fname", fnameValue);
  } else {
    fnameMessage.innerHTML = `<p class="message">Add Valid First Name</p>`;
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="message">Add Valid First Name</li>`
    );
    fname.classList.remove("green");
    fname.classList.add("red");
  }

  // Checking Last Name
  if (nameRegex.test(lnameValue)) {
    lnameMessage.innerHTML = `<p class="rightmessage">Hello ${fnameValue} ${lnameValue}</p>`;
    ul.innerHTML = "";
    lname.classList.remove("red");
    lname.classList.add("green");
    localStorage.setItem("lname", lnameValue);
  } else {
    lnameMessage.innerHTML = `<p class="message">Add Valid Last Name</p>`;
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="message">Add Valid Last Name</li>`
    );
    lname.classList.remove("green");
    lname.classList.add("red");
  }

  // Checking Email
  if (emailRegex.test(emailValue)) {
    emailMessage.innerHTML = `<p class="rightmessage">We will Mail deatils @ ${emailValue}</p>`;
    ul.innerHTML = "";

    email.classList.remove("red");
    email.classList.add("green");
    localStorage.setItem("email", emailValue);
  } else {
    emailMessage.innerHTML = `<p class="message">Add Valid Email id</p>`;
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="message">Add Valid Email id</li>`
    );
    email.classList.remove("green");
    email.classList.add("red");
  }

  // checking Contact No.
  if (contactRegex.test(contactNoValue)) {
    contactNoMessage.innerHTML = ` <p class="rightmessage">We will call you on 📞${contactNoValue}</p>`;
    ul.innerHTML = "";

    contactNo.classList.remove("red");
    contactNo.classList.add("green");
    localStorage.setItem("contact", contactNoValue);
  } else {
    contactNoMessage.innerHTML = `<p class="message">Add Valid Contact No.</p>`;
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="message">Add Valid Contact No.</li>`
    );
    contactNo.classList.remove("green");
    contactNo.classList.add("red");
  }

  // Checking Pincode
  if (pincodeRegex.test(pincodeValue)) {
    pincodeMessage.innerHTML = null;
    ul.innerHTML = "";
    pincode.classList.remove("red");
    pincode.classList.add("green");
    localStorage.setItem("pinCode", pincodeValue);
  } else {
    pincodeMessage.innerHTML = `<p class="message">Add Valid Pincode</p>`;
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="message">Add Valid Pincode</li>`
    );
    pincode.classList.remove("green");
    pincode.classList.add("red");
  }

  // Checking Addresh
  if (addreshregex.test(addreshValue)) {
    addreshMessage.innerHTML = `<p class="rightmessage">We will Gifts On this Addresh</p>`;
    ul.innerHTML = "";
    addresh.classList.remove("red");
    addresh.classList.add("green");
    localStorage.setItem("addresh", addreshValue);
  } else {
    addreshMessage.innerHTML = `<p class="message">Add Valid Addresh</p>`;
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="message">Add Valid Addresh</li>`
    );
    addresh.classList.remove("green");
    addresh.classList.add("red");
  }
});

// Removing From Local Storage

RemoveFromLocalStorage.addEventListener("click", function () {
  localStorage.removeItem("fname");
  localStorage.removeItem("lname");
  localStorage.removeItem("email");
  localStorage.removeItem("contact");
  localStorage.removeItem("pinCode");
  localStorage.removeItem("addresh");
});
