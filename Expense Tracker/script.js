//  all Dom Objects taken
const expenseRupees = document.getElementById("expenseRupees");

const expenseRemarks = document.getElementById("expenseRemarks");

const expenseType = document.getElementById("expenseType");

const submitBtn = document.getElementById("submitBtn");
// console.log(submitBtn);

const message = document.querySelector(".message");
const incometable = document.querySelector(".incometable");

const expensetable = document.querySelector(".expensetable");

const totalIncomecount = document.querySelector(".totalIncome");

const totalexpensecount = document.querySelector(".totalexpense");

const expenseUpdateMeassage = document.querySelector(".expenseUpdateMeassage");

const clearBtn = document.getElementById("clear");

const incomeoftable = document.getElementById("incomeoftable");

const expenseoftable = document.getElementById("expenseoftable");

//
// Local Storage Remove

clearBtn.addEventListener("click", function () {
  // Removing Elements From Table
  localStorage.removeItem("incomeT");
  localStorage.removeItem("expenseT");
  //   Removing Total Expense And Total Income
  localStorage.removeItem("totalExpense");
  localStorage.removeItem("totalIncome");
  //   Removing Sr No.
  localStorage.removeItem("srNoOfIncome");
  localStorage.removeItem("srNoOfExpense");
  //   removing message
  localStorage.removeItem("message");
  ///reload
  location.reload();
});

//adding Messages Form Local Storage
if (localStorage.getItem("message") != null) {
  let data = localStorage.getItem("message");
  expenseUpdateMeassage.innerHTML = data;
}

// Local Storage  if there add that tables
if (localStorage.getItem("incomeT") != null) {
  let data = localStorage.getItem("incomeT");
  let dataArray = JSON.parse(data);
  console.log(dataArray);
  let ae = dataArray.map(function (element) {
    return element;
  });
  let final = ae.join(" ");
  incometable.insertAdjacentHTML("beforeend", final);
}
if (localStorage.getItem("expenseT") != null) {
  let dataEX = localStorage.getItem("expenseT");
  let dataArrayEX = JSON.parse(dataEX);
  console.log(dataArrayEX);
  let ea = dataArrayEX.map(function (element) {
    return element;
  });
  let final = ea.join(" ");

  expensetable.insertAdjacentHTML("beforeend", final);
}
// /////////////
let dataofTotalIncome;
let dataofTotalExpense;
//  Adding taking Total Income/expense From Local Stroage And Saving it In A variable For Refresh

//  Checking Local Storage total Income if there then adding it
let totalIncome = [];
if (localStorage.getItem("totalIncome") != null) {
  dataofTotalIncome = localStorage.getItem("totalIncome");
  totalIncomecount.innerHTML = `Total Income: ${dataofTotalIncome}`;
  totalIncome.push(dataofTotalIncome);
}

//  Checking Local Storage total expense if there then adding it
let totalExpense = [];
if (localStorage.getItem("totalExpense") != null) {
  dataofTotalExpense = localStorage.getItem("totalExpense");
  totalexpensecount.innerHTML = `Total Income: ${dataofTotalExpense}`;
  totalExpense.push(dataofTotalExpense);

  //   console.log(dataofTotalExpense);
}

// Make the Output In number
let dataofTotalIncomeInNumber = Number(dataofTotalIncome);
let dataofTotalExpenseInNumber = Number(dataofTotalExpense);

// Adding Elements to Table On Click Submit

let srNoForIncome = 0;

//  Adding taking Sr No From Local Stroage And Saving it In A variable For Refresh
if (localStorage.getItem("srNoOfIncome") != null) {
  let data = localStorage.getItem("srNoOfIncome");
  srNoForIncome = Number(data);
}
let srNoOfExpense = 0;
if (localStorage.getItem("srNoOfExpense") != null) {
  let data = localStorage.getItem("srNoOfExpense");
  srNoOfExpense = Number(data);
  console.log(data);
}
//  Adding taking Data Of Table From Local Stroage And Saving it In A variable For Refresh

let arrayOfIncomeTable = [];
if (localStorage.getItem("incomeT") != null) {
  let data = JSON.parse(localStorage.getItem("incomeT"));
  //   console.log(data);
  arrayOfIncomeTable.push(data.join(" "));
}

let arrayOfExpenseTable = [];
if (localStorage.getItem("expenseT") != null) {
  let data = JSON.parse(localStorage.getItem("expenseT"));
  //   console.log(data);
  arrayOfExpenseTable.push(data.join(" "));
}

submitBtn.addEventListener("click", function (e) {
  //  Taking The User Input
  let amount = expenseRupees.value;
  let des = expenseRemarks.value;
  let type = expenseType.value;

  //   Checking If Value Is Not Enteres
  if (amount == "" || des == "" || type == "") {
    message.innerHTML = `<h1 class="plesefilldetails">Please Fill All Options</h1>`;
    expenseUpdateMeassage.innerHTML = `<h1 class="plesefilldetails">Please Fill All Options</h1>`;
  } else {
    message.innerHTML = null;

    // console.log(srNoForIncome);
    // console.log(srNoForExpense);

    //   Check If Income then What To Do

    if (type == "income") {
      let a = `<tr class="table" id="incomeoftable"><td colspan="2">${(srNoForIncome =
        srNoForIncome +
        1)}</td><td colspan="5">${amount}</td><td colspan="6">${des}</td>
</tr>`;
      incometable.insertAdjacentHTML("beforeend", a);

      //Taking Sr no To local Storgae

      localStorage.setItem("srNoOfIncome", String(srNoForIncome));

      totalIncome.push(amount);
      //   lOCAL sTORAGE wORK

      //   console.log(a);
      arrayOfIncomeTable.push(a);
      let arr1INC = JSON.stringify(arrayOfIncomeTable);

      localStorage.setItem("incomeT", arr1INC);
    } else {
      //   Check If Expense then What To Do

      let b = `<tr class="table" id="expenseoftable">
        <td colspan="2">${(srNoOfExpense = srNoOfExpense + 1)}</td>
        <td colspan="5">${amount}</td>
        <td colspan="6">${des}</td>
      </tr>`;
      expensetable.insertAdjacentHTML("beforeend", b);

      //Taking Sr no To local Storgae

      localStorage.setItem("srNoOfExpense", String(srNoOfExpense));

      totalExpense.push(amount);

      //   lOCAL sTORAGE wORK

      arrayOfExpenseTable.push(b);
      let arr1EXP = JSON.stringify(arrayOfExpenseTable);
      //   console.log(arr1EXP);
      localStorage.setItem("expenseT", arr1EXP);
    }

    //   console.log(totalIncome);

    // Calculating total income

    let ti = totalIncome.map(function (element) {
      return parseFloat(element);
    });
    //   console.log(ti);
    let ti1 = ti.reduce(function (sum, nextelement, nextelementarray) {
      return sum + nextelement;
    }, 0);
    //   console.log(ti1);

    // Displaying total income
    totalIncomecount.innerHTML = `Total Income: ${ti1}`;
    // console.log(dataofTotalIncomeInNumber + ti1.join());
    // Adding TOtal Income Amount To local Storage
    let localStorageTotalIncome = JSON.stringify(ti1);
    localStorage.setItem("totalIncome", localStorageTotalIncome);

    //

    // Calculating total Expense

    //   console.log(totalIncome);
    let te = totalExpense.map(function (element) {
      return parseFloat(element);
    });
    //   console.log(ti);
    let te1 = te.reduce(function (sum, nextelement, nextelementarray) {
      return sum + nextelement;
    }, 0);

    // Adding TOtal Expense Amount To local Storage

    let localStorageTotalExpense = JSON.stringify(te1);
    localStorage.setItem("totalExpense", localStorageTotalExpense);

    // Displaying total Expense
    totalexpensecount.innerHTML = `Total Expense: ${te1}`;
    // totalexpensecount.innerHTML = `Total Expense: ${te1}`;

    // Message Condition Of the Amont In toTal Saving
    let dif = ti1 - te1;

    if (dif < 1000) {
      // if Total Income Is Less Than 1000 Then What To Do
      expenseUpdateMeassage.innerHTML = `<h1 class="red">Total Savings : ${dif} Start Saving</h1>`;
      localStorage.setItem("message", expenseUpdateMeassage.innerHTML);
    } else if (ti1 > te1 && ti1 > te1 + 2000) {
      // if total income Is More Total Expense And Total Income Is More Thane 2000 Then What To do
      expenseUpdateMeassage.innerHTML = `<h1 class="green">Total Savings : ${dif} savings are looking good</h1>`;
      localStorage.setItem("message", expenseUpdateMeassage.innerHTML);
    }
  }
});
