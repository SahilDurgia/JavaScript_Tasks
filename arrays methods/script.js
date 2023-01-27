console.log(`-----------`);
let nums = [10, 25, 45, 67, 22, 78, 88, 91];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
console.log(sum);
console.log(`-----------`);

// //
let nums1 = [3, 6, 10, 25, 45, 67, 22, 78, 88, 5, 40, 91];

nums1.forEach(function (element, index, array) {
  if (element % 3 == 0 || element % 5 == 0) {
    console.log(element);
  }
});

// ////
// Print all the values of the array in console one after the other.
// Output:
// 10
// 20
// 30
console.log(`-------------------------`);
let arr = [10, 20, 12, 15, 25, 30];
// using map method
arr.map(function (element, index, array) {
  console.log(element);
});
console.log(`-------------------------`);
// using For Each method
arr.forEach(function (element, index, array) {
  console.log(element);
});
console.log(`-------------------------`);
// using For forlop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(`-------------------------`);
// using for of loop

for (e of arr) {
  console.log(e);
}

// Add the value 100 and 110 at the end of the array.
console.log(`-------------------------`);
arr.push(100, 110);
console.log(arr);
console.log(`-------------------------`);
//Remove the first value from the array.

arr.shift();
console.log(arr);
console.log(`-------------------------`);
//Add 0 at the start of the array.

arr.unshift(0);
console.log(arr);
console.log(`-------------------------`);
//Remove 1 value from the end of the array.
arr.pop();
console.log(arr);
console.log(`-------------------------`);
// Check if 40 is present in the array or not. If it is present print true in the console. Else print false.

if (arr.includes(40)) {
  console.log(`40 is There In this Array`);
} else {
  console.log(`40 is not there in an array`);
}
console.log(`-------------------------`);
//
// Print the first index of value 20 inside the array.
// Output: 1 (since it is present at 1st index)

console.log(arr.indexOf(20));
console.log(`-------------------------`);
//Print the last index of value 20 inside the array.
// Output: 10 (since last 20  is present at 10 index)

console.log(arr.lastIndexOf(20));
console.log(`-------------------------`);
// Check if 30 is present after index 5. Print appropriate message if present.

if (arr.includes(30) && arr.indexOf(30) == 5) {
  console.log(`30 is there in array at index 5`);
} else {
  console.log(`30 is  not there in array at index 5`);
}
//  Check if 80 is present in the array. Print appropriate message if present.

// arr.push(80);
if (arr.includes(80)) {
  console.log(`80 is there in this array`);
} else {
  console.log(`80 is not there in this array`);
}
// Reverse the array and print the reverse array inside the console.

arr.reverse();
console.log(arr);
//Join the above array to the following array.
// [5,6,7,8]
// Output should contain two arrays combined.

let arr2 = [5, 6, 7, 8];
let arr3 = arr.concat(arr2);
console.log(arr3);

//  Cut the array and get a new array from it, the new output array should be as follows.
// [ 50, 60, 70]

arr.splice(0, arr.length, 50, 60, 70);
console.log(arr);

// From the array, remove 80, 30, 90 from it.
// Final output should not contain these values.
// Output:    [10, 20, 30, 40, 50, 60, 70, 20, 10].

let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let indexOf30 = arr4.indexOf(30);
arr4.splice(indexOf30, 1);
let indexOf80 = arr4.indexOf(80);
arr4.splice(indexOf80, 1);
let indexOf90 = arr4.indexOf(90);
arr4.splice(indexOf90, 1);
console.log(arr4);

//  Insert 55 after the value 50 in the array.
// Output:      [10, 20, 30, 40, 50, 55, 60, 70, 20, 10]

let arr5 = [10, 20, 30, 40, 50, 60, 70, 20, 10];

let indexof50 = arr5.indexOf(50);
console.log(indexof50);
arr5.splice(indexof50 + 1, 0, 55);
console.log(arr5);

// Insert 30 before 70 in the array.
// Output:  [10, 20, 30, 40, 50, 55, 60, 30, 70, 20, 10]

let arr6 = [10, 20, 30, 40, 50, 55, 60, 70, 20, 10];

let indexOf70 = arr6.indexOf(70);
arr6.splice(indexOf70, 0, 30);
console.log(arr6);

// /////
const userInput = document.getElementById("userInput");

const checkBTN = document.getElementById("checkBTN");

const message = document.getElementById("message");

let input = userInput.value;
checkBTN.addEventListener("click", function () {
  let input = userInput.value;
  // console.log(input);
  let inputArray = input.split("");
  // console.log(inputArray);
  let inputArrayReverse = inputArray.reverse();
  // console.log(inputArrayReverse);
  let inputReverse = inputArrayReverse.join("");
  // console.log(inputReverse);
  if (input == inputReverse) {
    message.innerText = `${input} is a paremdrom Word`;
  } else {
    message.innerText = `${input} is NOT a paremdrom Word`;
  }
});
