var board = [];
var topPieces = 12;
var bottomPieces = 12;
var topWins = 0;
var bottomWins = 0;
var topTokensGone = 0;
var bottomTokensGone = 0;
var topColor = '';
var bottomColor = '';
const resetBoardButton = document.getElementById('board-reset');
const resetScoreButton = document.getElementById('score-reset');
const topPiece = '&#9679;';
const bottomPiece = '&#9679;';

resetBoardButton.addEventListener('click', resetBoard);
resetScoreButton.addEventListener('click', resetScore);

function resetBoard(){
    board = [
        ["", topPiece, "", topPiece, "", topPiece, "", topPiece],
        [topPiece, "", topPiece, "", topPiece, "", topPiece, ""],
        ["", topPiece, "", topPiece, "", topPiece, "", topPiece],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        [bottomPiece, "", bottomPiece, "", bottomPiece, "", bottomPiece, ""],
        ["", bottomPiece, "", bottomPiece, "", bottomPiece, "", bottomPiece],
        [bottomPiece, "", bottomPiece, "", bottomPiece, "", bottomPiece, ""],
    ]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let square = document.getElementById(`${i}-${j}`);
            square.innerHTML = board[i][j];
            square.addEventListener('click', selectToken);

            if (getTopColor() === getBottomColor()) {
                window.alert("Player colors must be different.");
                return;
            }

            if (square.classList.contains('top-piece')) {
                square.style.color = getTopColor();
            }
    
            if (square.classList.contains('bottom-piece')) {
                square.style.color = getBottomColor();
            }
        }
    }

    topTokensGone = 0;
    bottomTokensGone = 0;

    document.getElementById('top-tokens').innerText = topTokensGone;
    document.getElementById('bottom-tokens').innerText = bottomTokensGone;
}

function resetScore() {
    topWins = 0;
    bottomWins = 0;
}

function selectToken() {
    if (this.innerHTML === '') {
        return;
    } else {
        this.style.border = "solid red 5px"
    }
}

function moveToken() {
    showPossibleMoves();
}

function showPossibleMoves() {
    console.log(this);
}

function getTopColor() {
    let colors = document.getElementsByName('top-color');

    for (let i = 0; i < colors.length; i++) {
        if(colors[i].checked) {
            return colors[i].value;
        }
    }
}

function getBottomColor() {
    let colors = document.getElementsByName('bottom-color');

    for (let i = 0; i < colors.length; i++) {
        if(colors[i].checked) {
            return colors[i].value;
        }
    }
}