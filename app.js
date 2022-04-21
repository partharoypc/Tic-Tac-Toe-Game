let player = "X";
let gameOver = false;

const changTurn = () => {
    return player === "X" ? "O" : "X";
}

const checkWin = () => {
    let game = document.getElementsByClassName('gText');
    let winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winList.forEach(e => {
        if ((game[e[0]].innerText === game[e[1]].innerText) && (game[e[2]].innerText === game[e[1]].innerText) && (game[e[0]].innerText !== "")) {
            document.getElementsByClassName('gameStatus')[0].innerText = " Win player : " + game[e[0]].innerText;
            gameOver = true;
            player = null;

        }
    })
}

let allValue = document.querySelectorAll('.gValue')
Array.from(allValue).forEach(element => {
    let gameText = element.querySelector('.gText');
    element.addEventListener('click', () => {
        if (gameText.innerText === '') {
            gameText.innerText = player;
            player = changTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName('gameStatus')[0].innerText = "Turn for : " + player;
            }
        }
    })
})

// Add onclick listener to reset button
btnRestart.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.gText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    player = "X";
    gameOver = false
})