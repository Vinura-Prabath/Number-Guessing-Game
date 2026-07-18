// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

   Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
}