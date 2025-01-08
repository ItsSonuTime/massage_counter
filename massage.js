let button = document.getElementById("btn")
let msg = document.getElementById("notify");
let retbtn = document.getElementById("reset");

let score = 0;

// Update the score display
function updateScore() {
  msg.textContent = score;
}

// Increment the score
button.addEventListener('click', () => {
  score++;
  updateScore();
});

// Reset the score
retbtn.addEventListener('click', () => {
  score = 0;
  updateScore();
})