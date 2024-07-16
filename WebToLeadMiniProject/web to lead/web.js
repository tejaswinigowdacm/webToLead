function beforesubmit(){
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
  
    console.log("inpute date value..", +inputdate.value);
   
    let formattedDate =new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;
    console.log(formattedDate);
    console.log(outputdate.value);

 }
