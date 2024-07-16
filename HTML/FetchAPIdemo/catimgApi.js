async function catimgapi(){
   let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10",
   {method:"GET"});
   let data = await response.json();
   console.log(data);
   let getimgurl = data[0].url;
   let getimgid = data[0].id;
   console.log(getimgurl,getimgid);
   let srcelement = document.querySelector(".catimg");
   srcelement.src = getimgurl;
}
catimgapi();