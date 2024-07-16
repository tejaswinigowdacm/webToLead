
setTimeout(()=>{
    clearInterval(displayEvnt);
    console.log("Display event interval has been stopped");
},15000);

function changeHandler(event){
const labval = event.target.value;
console.log(labval);
//custom event handling methods
//step 1: create custom event
if(labval>10){
    const mycustevnt = new CustomEvent("valueten",{  
        //CustomEvent is a constructor "valueten" is the customevent name and mycustevnt is the variable
        // the event name should be in the small case, not alphanumeric and not prefixed with 'on'
        detail:{
            message:"user have entered the value"
        },
    });
    //step 2: disptch the event
    document.dispatchEvent(mycustevnt);
    //step 3: handle event out of loop or if statement to access the event data
}
}   
//hndle the custom event
let displayEvnt;
  document.addEventListener("valueten",(event)=>{
    displayEvnt = setInterval(()=>{
        console.log('custom event message accessed- ',event.detail.message);
    },5000);
    
});

//settimeout() demo


// example 2 for setTimeout and setInterval
let intervalCount=0;
let timeoutCount =0;

const intervalID = setInterval(intervalFunctn, 1000);
const timeoutID = setTimeout(timeoutFunctn, 500);
console.log("start");

function intervalFunctn(){
    intervalCount++;
    console.log(`Interval Tick, ${intervalCount}`);
    if(intervalCount == 5){
        clearInterval(intervalID);
    }
}
function timeoutFunctn(){
    timeoutCount++;
    console.log(`Timeout Tick, ${timeoutCount}`);
    if(timeoutCount == 3){
        clearTimeout(timeoutID);
    }
}

function calculateSum(arr){
    debugger; // to debug in console add this keyword 
   let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum= sum+arr[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5];
const total = calculateSum(numbers);
console.log("total amount is.. ",+total);