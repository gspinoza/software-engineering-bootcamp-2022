// global variables
let randomNumber = Math.trunc(Math.random() * 100 + 1);
let score = 10;
let currentHighScore = 0;
let guessHistory = [];
// display current random number
console.log(`The random number is ${randomNumber}`);

// displays the container given the container id name
function displayContainer(container) {
    if (container == "gamewin") {
        document.getElementById("gameplay").style.zIndex = "1";
        document.getElementById("gamewin").style.zIndex = "3";
        document.getElementById("gameover").style.zIndex = "2";

        document.getElementById("correcText").innerHTML = `Your guess was correct. <span id="textNumber">${randomNumber}</span> is my secret number.`;
        // document.getElementById("textNumber").style.fontWeight = "bold";
        // document.getElementById("textNumber").style.fontSize = "30px";
        // document.getElementById("textNumber").style.color = "gold";

        document.getElementById("scoretext").innerHTML = `Your score : ${score}`;
        document.getElementById("bestText").innerHTML = `Best: ${currentHighScore}`;
    } else if (container == "gameover") {
        document.getElementById("gameplay").style.zIndex = "2";
        document.getElementById("gamewin").style.zIndex = "1";
        document.getElementById("gameover").style.zIndex = "3";
        document.getElementById("answerText").innerHTML = `My number was: ${randomNumber}`;
    } else {
        document.getElementById("gameplay").style.zIndex = "3";
        document.getElementById("gamewin").style.zIndex = "2";
        document.getElementById("gameover").style.zIndex = "1";
    }
} 

// updates new highest score
function checkHighScore(score) {
    if (score > currentHighScore) {
        currentHighScore = score;
    }
}

// validates the input of the user
function validateInput(guess) {
    if (isNaN(guess)) {
        document.getElementById("info-label").innerHTML = "Please enter numbers only not letters";
        return false;
    }  else if (guess === "") {
        document.getElementById("info-label").innerHTML = "Please enter a number!";
    }  else if (guessHistory.includes(guess)) {
        document.getElementById("info-label").innerHTML = "You already made that guess, try again";
    } else if (guess > 100 || guess < 1) {
        document.getElementById("info-label").innerHTML = "The number should be between 1 and 100";
        return false;
    } else {
        // store guess
        guessHistory.push(guess);
        // append current guess to list
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(`${guess}`));
        document.getElementById("guess-list").appendChild(entry);
        return true;
    }
}

// checks the guess of the user
function checkguess(guess) {
    if (guess == randomNumber) {
        // check score
        checkHighScore(score);
        // update score
        document.getElementById("highscore").innerHTML = `High Score: ${currentHighScore}`;
        // display win GUI
        displayContainer("gamewin");
    } else if (guess < randomNumber){
        // too low
        document.getElementById("info-label").innerHTML = `Your guess <span id="textNumber">${guess}</span> is too low`;
        // update score
        score--;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    } else {
        // too high
        document.getElementById("info-label").innerHTML = `Your guess <span id="textNumber">${guess}</span>  is too high`;
        // update score
        score--;
        document.getElementById("score").innerHTML = `Score :${score}`;
    }
}

// main function to process input
function processInput() {
    if (score != 0) {
        // get user input
        let guess = (document.getElementById('text-field').value);
        // reset input field
        document.getElementById("text-field").value = "";
        // validate user input
        let userInput = validateInput(guess)
        // check guess
        if (userInput) {
            checkguess(Number(guess));
        }
    } else {
        displayContainer("gameover");
    }
}

// resets fields for a new gameplay
function resetFields(state){
    // reset fields
    guessHistory = [];
    document.getElementById("text-field").value = "";
    displayContainer("gameplay");
    randomNumber = Math.trunc(Math.random() * 100 + 1);
    // display current random number
    console.log(`The random number is ${randomNumber}`);
    document.getElementById("score").innerHTML = "Score: 10";
    score = 10;
    document.getElementById("info-label").innerHTML = "Enter a number";
    document.getElementById("guess-list").innerHTML = "";

    if (state == "reset"){
        document.getElementById("highscore").innerHTML = "High Score: 0";
        currentHighScore = 0;
    }
}

// add action listener to check button
document.getElementById('check-guess').addEventListener('click', function () {
    processInput();
});

// add action listener to reset button 
document.getElementById('reset').addEventListener('click', function () {
    resetFields("reset");
});

// // add action listener to play again button 
document.getElementById('play-again').addEventListener('click', function () {
    resetFields("clear");
});

// // add action listener to try again button 
document.getElementById('try-again').addEventListener('click', function () {
    resetFields("clear");
});
