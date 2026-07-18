// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (guess < 1 || guess > 10) {
        result.innerHTML = "Please enter a number between 1 and 10.";
    }
    else if (guess > randomNumber) {
        result.innerHTML = "📈 Too High! Try a smaller number.";
    }
    else if (guess < randomNumber) {
        result.innerHTML = "📉 Too Low! Try a bigger number.";
    }
    else {
        result.innerHTML = "🎉 Correct! You guessed the number.";

        // Generate a new random number
        randomNumber = Math.floor(Math.random() * 10) + 1;
    }
}