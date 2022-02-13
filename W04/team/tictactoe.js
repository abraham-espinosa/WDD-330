const board = document.querySelector('.board');
const reset = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let player = player1;

board.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoardDiv);

function addPiece(e) {
    console.log(e.target);
    e.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;
}

function resetBoardDiv() {
    const board = document.querySelector('.board');
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].innerText = '';
    }
    const children = Array.from(board.children);
    const empty = children.filter(function (child) {
        return child.innerText == 'X' || child.innerText == 'O';
    });
    console.log(empty);
}