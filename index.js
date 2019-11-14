var board = [];
var topWins = 0;
var bottomWins = 0;
var topTokensGone = 0;
var bottomTokensGone = 0;
const resetBoardButton = document.getElementById('board-reset');
const resetScoreButton = document.getElementById('score-reset');


function resetBoard(){
    board = [
        ["", "&#9679;", "", "&#9679;", "", "&#9679;", "", "&#9679;"],
        ["&#9679;", "", "&#9679;", "", "&#9679;", "", "&#9679;", ""],
        ["", "&#9679;", "", "&#9679;", "", "&#9679;", "", "&#9679;"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["&#9675;", "", "&#9675;", "", "&#9675;", "", "&#9675;", ""],
        ["", "&#9675;", "", "&#9675;", "", "&#9675;", "", "&#9675;"],
        ["&#9675;", "", "&#9675;", "", "&#9675;", "", "&#9675;", ""],
    ]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let square = document.getElementById(`${i}-${j}`);
            square.innerHTML = board[i][j];
        }
    }

    topTokensGone = 0;
    bottomTokensGone = 0;
}

resetBoardButton.addEventListener('click', resetBoard);