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

resetBoardButton.addEventListener('click', resetBoard);
resetScoreButton.addEventListener('click', resetScore);

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
            square.addEventListener('click', selectToken);

            // if (square.innerHTML === '&#9679;') {
            //     square.style.color = getTopColor();
            // }
    
            // if (square.innerHTML === '&#9675;') {
            //     square.style.color = getBottomColor();
            // }
        }
    }

    console.dir(document.getElementById('board'))

    topTokensGone = 0;
    bottomTokensGone = 0;
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
        moveToken();
        this.style.border = "";
    }
}

function moveToken() {

}

// function getTopColor() {
//     let colors = document.getElementsByName('top-color');

//     for (let i = 0; i < colors.length; i++) {
//         if(colors[i].checked) {
//             return colors[i];
//         }
//     }
// }

// function getBottomColor() {
//     let colors = document.getElementsByName('bottom-color');

//     for (let i = 0; i < colors.length; i++) {
//         if(colors[i].checked) {
//             return colors[i];
//         }
//     }
// }