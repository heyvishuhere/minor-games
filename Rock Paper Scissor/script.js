let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>
{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () =>
{
    msg.innerText = "Game is draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}
const showwinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>
{
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
        console.log("Draw");
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false : true;
        }
        else if (userChoice === "paper")
        {
            userWin=compChoice==="scissor"?false : true;
        }
        else
        {
            userWin=compChoice==="rock"?false : true;
        }

        showwinner(userWin ,userChoice,compChoice);
    }

}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
