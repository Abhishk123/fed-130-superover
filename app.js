//alert("hi");

//for(let i=0;i<=5;i++)
//console.log(i);

/*let array =[1,2,5,"abhishek"];
array.forEach((element)=> {
    console.log(element);
})*/
var PossibleRuns=[1,2,3,4,5,6];

var team1={
    name:"CSK-S",
    runs:[],
    score : 0
}

var team2={
    name:"MI",
    runs:[],
    score : 0
}

var turn;
/*window.addEventListener("load",()=> {

})*///old method

window.onload = ()=>{
    serlectTurn();//Decide who is going to bat first
    updateButtonText();
    updateScore();
    updateName();
}
var serlectTurn= ()=>{
    turn=Math.round(Math.random())+1;
    console.log(turn);
}

var updateButtonText = () =>{
    var button=document.getElementById("strike-button");
    console.log(button);
    var result=document.getElementById("result");
    result.style.visibility="";
    //check the game is over or not
    if(team1.runs.length == 6 && team2.runs.length ==6){
        button.remove();
        //check if match uis draw
        result.textContent = team1.score ===team2.score? 'Its a draw':`${team1.score>team2.score?team1.name:team2.name}wins`
    }else{
        //check if the strike is over
        turn=team1.runs.lengtgh ===6? 2:team2.runs.length ===6?1:turn;
        button.textContent= `Strike(${turn===1?team1.name:team2.name})`;
    }

    }
   
var updateScore = ()=>{
    //update team 1 score
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;

    updateRuns();
}
var updateRuns=()=>{
    var teamOneRunsElement =document.getElementById("team-1-round-runs").children;
    var teamTwoRunsElement =document.getElementById("team-2-round-runs").children;
    team1.runs.forEach((run,index)=>{
        teamOneRunsElement[index].textContent=run;
    });

        team2.runs.forEach((run,index)=>{
            teamTwoRunsElement[index].textContent=run;
        });
}

var updateName = ()=> {
    document.getElementById("team-1-name").textContent=team1.name;

    document.getElementById("team-2-name").textContent=team2.name;
}

var handleStrikeButtonClick = ()=>{
    var run =PossibleRuns[Math.floor(Math.random()*PossibleRuns.length)];
    console.log(run);
    run = run===5? 'w':run;
    console.log(run);

if(turn ===1){
    team1.runs.push(run);
    team1.score=calculateScore(team1.runs);
    console.log(team1.score);
}
else{
    team2.runs.push(run);
    team2.score=calculateScore(team2.runs);
    console.log(team2.score);

}
updateButtonText();
updateScore();
}

var calculateScore =(runs) =>{
    //when ever you get wickets score is 0
    return runs.map(run=>{
        return run== "w"?0:run;
    }).reduce((total,run)=>total+run,0);
};