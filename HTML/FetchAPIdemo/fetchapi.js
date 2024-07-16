function reqresApiusers(){   // whenever we use .then function its promise. else we can use Async await as well
    fetch("https://reqres.in/api/users",{method:"GET"})
    .then((response)=>response.json())
    .then((data) => console.log("Data",data));
}
reqresApiusers(); 
// the above function using async await
async function reqresApiusers1(){
    let res = await fetch("https://reqres.in/api/users",{method:"GET"});
    console.log(".then res without json",res);
    let data = await res.json(); 
    console.log("data with res var",data);
}
reqresApiusers1();
/*
async function loadusers(){
    let uservalues = await reqresApiusers();
    console.log(uservalues);
}
loadusers();*/