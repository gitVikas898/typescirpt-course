"use strict";
// convert to more or less specififc 
let A = 'hello';
let B = A; //LESS SPECIFIC TYPE
let C = A; // more specific
// angle brackets
let d = "world";
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
const myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
//problem with type assertion 
const nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
