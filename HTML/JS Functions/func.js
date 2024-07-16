let calcRes1 = calc1(5,10);
console.log(calcRes1);
//we can call the function before function declaration thst is called HOISTING

function calc1(n1,n2){ //function declaration
    let sum = n1+n2;
    return sum;
}
let calc2 = function(n1,n2){  // function Expression
    if(n2){
        let sum = n1+n2;
        return sum;
    }else{
        return n1;
    }
  
}
 //let calcRes1 = calc1(5,10);
 //console.log(calcRes1); 
 //we can call the function before function declaration thst is called HOISTING

 let calcRes2 = calc2(5,10);
 console.log(calcRes2);

 let calcRes3 = calc2(20);
 console.log(calcRes3);

 //using arraow function, function keyword is replaced by =>
 let calc3 = (n1,n2)=>{
    if(n2){ 
        let sum = n1+n2; 
        return sum;}
    else{ return n1}
 }

 //dynamic usage of function
 let greet = (username)=>{
    return `${username}, welcome `;
 }
 let greet1 = (username)=> username; 
 //for only one line functions we dont have to use {} or return statement
    
 console.log("Hello",greet("Isha"));
 console.log("Hello",greet1("IshaG"));

 //callback function
 function welcomeME(name,callme){
    console.log(`Hello, ${name}`);
callme();
 }
  function greetings(){
    console.log("Welcome to salesforce LWC");
  }
  function greet2(){
    console.log("Welcome to Salesforce Bootcamp training");
  }
  welcomeME("Isha",greetings);
  welcomeME("Tejaswini",greet2);