const update = function() {
    gameCounter++;
    if (gameCounter < tries) {
        h2Score.innerHTML = `${player1Score} to ${player2Score}`;
    } else if (gameCounter == 0 || tries == 0) {
        h2Score.innerHTML = `${player1Score} to ${player2Score}`;
    } else {
        player1.disabled = true;
        player2.disabled = true;
        if (player1Score > player2Score)
            h2Score.innerHTML = `<span style="color: rgb(0, 128, 68);">${player1Score}</span> to <span style="color: rgb(187, 37, 62);">${player2Score}</span>`;
        else if (player1Score < player2Score)
            h2Score.innerHTML = `<span style="color: rgb(187, 37, 62);">${player1Score}</span> to <span style="color: rgb(0, 128, 68);">${player2Score}</span>`;
        else
            h2Score.innerHTML = `<span style="color: rgb(6, 77, 209);">${player1Score}</span> to <span style="color: rgb(6, 77, 209);">${player2Score}</span>`;
    }
}
const h2Score = document.querySelector('#scoreBoard');
const reset = document.querySelector('#reset');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const selectTries = document.querySelector('#gameCounter');
let tries = 0;
let player1Score = 0;
let player2Score = 0;
selectTries.addEventListener('change', function(e) {
    tries = selectTries.value;
})
let gameCounter = 0;
player1.addEventListener('click', function(e) {
    if (gameCounter < tries) {
        player1Score++;
        update();
    }
})
player2.addEventListener('click', function(e) {
    if (gameCounter < tries) {
        player2Score++;
        update();
    }
})
reset.addEventListener('click', function(e) {
    tries = 0;
    player1Score = 0;
    player2Score = 0;
    gameCounter = 0;
    update();
    gameCounter--;
    selectTries.value = 0;
    player1.disabled = false;
    player2.disabled = false;
})