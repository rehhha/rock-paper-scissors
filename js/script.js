function getComputerChoice() {
    let possibilities = ["rock","paper","scissors"];
    let computerChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
    return computerChoice
}

function getUserChoice() {
    while(true) {
        let userInput = prompt("Rock, Paper or Scissors?")
        userInput = userInput.toLowerCase()
        if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            console.log(userInput)
            return userInput
        } else {
            alert("Your input must be Rock, Paper or Scissors")
        }
    }
}

function playRound(userChoice, computerChoice) {

    let winner = "anyone"

    if(userChoice === "rock") {
        if(computerChoice === "paper") {
            winner = "computer"
            alert("You lose! Paper beats Rock!")

        } else if(computerChoice === "scissors") {
            winner = "user"
            alert("You win! Rock beats Scissors!")
        } else {
            alert("It's draw!")
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "scissors") {
            winner = "computer"
            alert("You lose! Scissors beat Paper!")
        } else if(computerChoice === "rock") {
            winner = "user"
            alert("You win! Paper beats Rock!")
        }else {
            alert("It's draw!")
        }
    } else {
        if(computerChoice === "rock") {
            winner = "computer"
            alert("You lose! Rock beats Scissors!")
        } else if(computerChoice === "paper") {
            winner = "user"
            alert("You win! Scissors beat Paper!")
        } else {
            alert("It's draw!")
        }
    }

    return winner
}

function writeFinalResults(userScore, computerScore) {
    alert("Final scores are: " +
    "\nUser Score: " + userScore +
    "\nComputer Score: " + computerScore)
}

function game() {
    let userScore = 0,
    computerScore = 0

    for(i = 0; i < 5; i++) {

        alert("Round " + (i+1) + 
        "\nUser Score: " + userScore +
        "\nComputer Score: " + computerScore)
    
        let winner = playRound(getUserChoice(), getComputerChoice())

        if(winner === "user") {
            userScore++
        } else if(winner === "computer") {
            computerScore++
        }     
    }

    writeFinalResults()
}

game()
