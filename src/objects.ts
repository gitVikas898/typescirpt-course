let myObj:Object;
myObj = [];

console.log(typeof myObj)

type Guitarist = {
    name:string;
    active:boolean;
    albums:(string | number)[];
    age?:number;
}

let evh:Guitarist = {
    name:"eddie",
    active:false,
    albums:[1984,5150,'OU812']
}

console.log(evh.name);


const greetGuitarist = (guitarist:Guitarist) => {
    return `Hello ${guitarist.name}`;
}

console.log(greetGuitarist(evh))

enum Grade {
    U = "Unsatisfactory",
    D = "Bad , need to improve",
    C = "Decent",
    B = "Good Work",
    A = "Amazing",
    E = "Excellent"
}

console.log(Grade.A)