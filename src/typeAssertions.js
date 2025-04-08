// convert to more or less specififc 
var A = 'hello';
var B = A; //LESS SPECIFIC TYPE
var C = A; // more specific
// angle brackets
var d = "world";
var e = 'world';
var addOrConcat = function (a, b, c) {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
var myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
//problem with type assertion 
var nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
// The dom
var img = document.querySelector('img');
if (img) {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png";
}
