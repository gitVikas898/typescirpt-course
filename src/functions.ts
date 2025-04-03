interface guitarist  {
    name:string;
    active:boolean;
    albums:stringOrNumberArray;
    age?:number;
}
//Type aliases 
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type mathFunction = (a:number,b:number) => number


let subtract:mathFunction = function(c,d){
    return c-d;
}

//optional parameters

const logMsg = (params:any)=>{
    console.log(params);
}

const addAll = (a:number,b:number,c?:number):number=>{
    if(typeof c!== 'undefined'){
        return a+b+c
    }
    return a+b;
}
const sumAll = (a:number,b:number,c:number = 2):number=>{
    return a+b+c;
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))

//the never type 
const createErrir = (errorMsg:string):never=>{
    throw new Error(errorMsg);
}

const infinte = ()=>{
    let i:number = 1
    while(true){
        i++
        if(i>100)break; // making sure its not endless loop
    }
}

