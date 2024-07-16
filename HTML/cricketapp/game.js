const game={
    team1:"India",
    team2:"Aus",
    players:[
        ["Dhoni","Sharma","Kohli","Rahul","Jadeja","pandey","Ashwin","Khan","Shami"],
        ["wade","Cummins","Green","Maxwell","Finch","Marsh","stoinis","Starc","Warner"],
    ],
    Century:['Kohli','Sharma','warner','Maxwell'],
    odds:{
        team1:1.33,
        x: 3.25,
        team2:6.5,
    }
}
//1. create one player array for each team
let [players1,players2] = game.players; //destructuring
console.log(players1,players2);
//let player2 = game.players[1];


//2. create one var "captian" with first player as wicketkeeper and rest all in one array
let [captain, ...fieldplayers] =players1;// game.players[0]; (using spread operator)
console.log("Captain ", captain);
console.log("FieldPlayers ",fieldplayers);

//3. create an array of 'allplayers' containing all players of both teams
let allplayers = [...players1,...players2]; //spread operator
console.log("All Players", allplayers);

//4. create new array'playersfinal' containing all original players plus 3 additional players
let plyersFinal = [...allplayers,'sandeep','John','Sunil'];
console.log("Final Players",plyersFinal);

//5. based on game.odds object create 1 var for each odd properties
let {team1,x:draw,team2} = game.odds; //using draw as alias to x property
console.log("Team1",draw,team2);
console.log("Draw",draw);
console.log("team2", team2);

//6. the team with lower odd is winning team, print to console the
//winning team without using ternery operator or if else statement

//let winningteam = team1 > team2 ? console.log("Team 2 will win"):console.log("team 1 will win");//this is using ternery operator

// without using ternery or if else we can use logical operators like &&,!!,!
let winteam = team1 < team2 && console.log("Team 1 will win.....");
let winteam1 =console.log(team1 < team2)||team1 < team2 || console.log("T2 will win");

//7.loop over game.century array and print each plyer name to console with century number
for(let [index,value] of game.Century.entries()){
   // console.log("Century",index+1,":",value); or
    console.log(`Century ${index+1} : ${value}`);
}

//8. use a loop to caluculate the average of 'Odds' and log it into console
let sum =0;
let counter =0;
for(let item in game.odds){
    console.log(game.odds[item]);
    sum = sum + game.odds[item];
    console.log(sum);
    counter = counter+1;
}
console.log(counter)
console.log("avg",Math.round(sum/counter));