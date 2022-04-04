const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

function updateScore() {
    
}

p1Button.addEventListener('click', function(e){
    // if not end
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if(p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

p2Button.addEventListener('click', function(e){
    // if not end
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-success");
            p1Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener("change", function(e){
    winningScore = parseInt(this.value);
    reset()
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("has-text-success", "has-text-danger")
    p2Display.classList.remove("has-text-success", "has-text-danger")
    p1Button.disabled = false;
    p2Button.disabled = false;
}