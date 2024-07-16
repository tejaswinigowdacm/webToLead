let map1 = new Map();
map1.set("name","Isha");
map1.set(1, "number");
map1.set(true,"vendor");
console.log(map1);
console.log(map1.keys());
console.log(map1.values());
console.log(map1.get("name"));

for(let [key,value] of map1){
    console.log(key);
}
let map2 = new Map([
    ["India","In"],
    ["United States","US"],
    ["Canada","CA"]
]);
    console.log(map2);
    for(let code of map2.keys()){
        console.log(code);
    }
    for(let code of map2.values()){
        console.log(code);
    }
    for(let [key,value] of map2){
        console.log(key,value);
    }