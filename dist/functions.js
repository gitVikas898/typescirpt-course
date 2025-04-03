"use strict";
let subtract = function (c, d) {
    return c - d;
};
//optional parameters
const logMsg = (params) => {
    console.log(params);
};
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
//the never type 
const createErrir = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinte = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // making sure its not endless loop
    }
};
