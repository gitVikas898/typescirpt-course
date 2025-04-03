"use strict";
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum([1, 2, 3, 4, 5]));
let a = 10;
let b = '5';
let c = 2;
console.log(a / c);
//basic types 
let myName = "Vikas"; //explicit definition
let x = "Rajan"; // implicit 
let album;
let sum;
let isCompleted;
sum = 200;
isCompleted = true;
album = "Code";
album = 45;
album = false;
const add = (a, b) => {
    return a + b;
};
//union type
let postId;
let isActive;
