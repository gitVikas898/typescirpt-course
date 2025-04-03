"use strict";
let myObj;
myObj = [];
console.log(typeof myObj);
let evh = {
    name: "eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
console.log(evh.name);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(evh));
var Grade;
(function (Grade) {
    Grade["U"] = "Unsatisfactory";
    Grade["D"] = "Bad , need to improve";
    Grade["C"] = "Decent";
    Grade["B"] = "Good Work";
    Grade["A"] = "Amazing";
    Grade["E"] = "Excellent";
})(Grade || (Grade = {}));
console.log(Grade.A);
