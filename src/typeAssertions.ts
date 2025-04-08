type One = string;
type Two = string | number;
type Three = 'hello'

// convert to more or less specififc 

let A:One = 'hello'
let B = A as Two  //LESS SPECIFIC TYPE
let C = A as Three// more specific

// angle brackets

let d = <One>"world";
let e = <string | number>'world'

const addOrConcat = (a:number,b:number,c:"add" |"concat"):number|string=>{
    if(c=== "add")return a+b;
    return ''+a+b
}

const myVal:string = addOrConcat(2,2,'concat') as string;
console.log(myVal);

//problem with type assertion 
const nextVal:number = addOrConcat(2,2,'concat') as number;
console.log(nextVal);
// The dom
const img = document.querySelector('img') as HTMLImageElement;
if (img) {
  img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png";
}