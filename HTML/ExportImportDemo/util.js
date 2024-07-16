// Export while declaring
export let days =["mon","tue","wed","thu","fri"];
export const dob =1992;
export function hello(message){
    alert(message);
}

//Export after declaration
function addition(n1,n2){
    console.log(n1+n2);
}
export {addition};

//default export
export default function multiply(n1,n2){
    alert(n1*n2);
}