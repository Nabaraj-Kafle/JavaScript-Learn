// let a = Math.floor(Math.random() * 3)
const choices = ['scissor', 'paper', 'rock'];
let x = document.getElementById("hus")

function play(playerChoice){
    let result 

    const computerChoice =choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    
    const m= document.getElementById("yc")
 const n= document.getElementById("cc")
 const o= document.getElementById("result")

    if (computerChoice===playerChoice) {
        result="Its a draw."
        
    } else if(playerChoice === "scissor" && computerChoice==="paper" || playerChoice === "rock" && computerChoice==="scissor" || playerChoice === "paper" && computerChoice==="rock" ) {
        result="You win"
    } else {
        result="You lose"
    }
    m.textContent=`Player Choice :    ${playerChoice}`
    n.textContent=`Computers Choice :     ${computerChoice}`
    o.textContent=`Result :    ${result}`

    

}

