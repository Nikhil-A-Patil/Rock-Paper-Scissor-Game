let userScore = 0;
let compScore = 0;
let userDash = document.querySelector("#user-score");
let compDash = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


//Computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
}

//Draw game function

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Draw! Play again";
    msg.style.backgroundColor = "rgb(59, 35, 35)";
}

//Show winner function

const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
    {
        // console.log("You won");
        msg.innerText = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore+=1;
        userDash.innerText = userScore;
    }
    else
    {
        // console.log("You have lost");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore+=1;
        compDash.innerText = compScore;
    }
}

//Play game function
const playGame = (userChoice) => {
    console.log("You: ", userChoice);
    let compChoice = genCompChoice();

    console.log("Computer: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //Comp choice can be paper or scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //Comp choice can be rock or scissor
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            //User selected scissor
            //Comp can generate rock and paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

    

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})