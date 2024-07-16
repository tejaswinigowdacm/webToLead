let cars = ["Audi","Benz","Honda","TATA"];//array
let myObj ={
    fname:"Isha",lname:"Gowda",age:"5 years"
}; //Object

for (let i=0; i<cars.length; i++){
    //console.log(`${i}.${cars[i]}`);
}

let i=0;
console.log("while loop ");
while(i < cars.length){
    //console.log(`${i}.${cars[i]}`);
    i=i+1;
}
//for of loop
console.log("for of loop ");
for(let currentItem of cars.entries()){ //entires() determines index of the array
    console.log(`${currentItem}`);
}
// destructuring the for of loop values
console.log("for of loop destructuring ");
for(let [index,car] of cars.entries()){
   // console.log(`${index}.${car}`);
}

//iterating object. to make object iterable we have 3 methods
//object.keys(),object.values(),object.entries()

for(let curritem of Object.keys(myObj)){
    console.log(curritem,myObj[curritem]);
    //console.log(myObj[curritem]);
}
for(let curritem of Object.values(myObj)){
    console.log(curritem,myObj[curritem]); //cnt access key by value
}
//to iterate both key and value together
for(let [property, val] of Object.entries(myObj)){
    console.log(`${property}.${val}`);
    console.log(property,val);  
}
// for in loop
// to iterate over objects directly use for in
for(let item in myObj){
    console.log("for in loop result",item, myObj[item]);
}

let storetime ={
    fri:{open:"10 Am",close:"9 Pm"},
    sat:{open:"11 Am",close:"8 Pm"},
    sun:{open:"1 Pm",close:"9 pm"}
}
for(let timing in storetime){
    //console.log(timing,storetime[timing]);
    let {open,close} = storetime[timing];
    console.log(open,close);
    console.log(`On ${timing} the store opens at ${open} and closes at ${close}`);
}

for(let [open,close] in storetime){
    console.log(`${open},${close}`);
    
}