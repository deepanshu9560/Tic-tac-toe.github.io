let cell = document.querySelectorAll('.cell');
let player1 = document.querySelector('.X-Turn');
let player2 = document.querySelector('.O-Turn');
let playerO = 'O';
let playerX = 'X';
let gameTurn = true;
let winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let result = document.querySelector('.win');
let resultText = document.querySelector('.win h1');
let aud = new Audio('ting.mp3');
let newAud = new Audio('music.mp3');
let resetBtn = document.getElementById('resetBtn');

cell.forEach(currElem => {
    currElem.addEventListener('click', () => {
        let currentPlayer = gameTurn ? playerX : playerO;
        addInCell(currElem, currentPlayer);
        currElem.classList.add('disabled');
        if (winnerCheck(currentPlayer)) {
            // console.log('Winner');
            result.classList.remove('inactive');
            resultText.innerText = currentPlayer + " Won the game!!!";
            newAud.play();
        }
        swapPlayer();
    });
});

function winnerCheck(currentPlayer) {
    // some function is a array function return true or false
    return winningCondition.some(condition => {
        // console.log(condition);
        return condition.every(index => {
            // console.log(index);
            return cell[index].classList.contains(currentPlayer);
        });
    });
}

function swapPlayer() {
    gameTurn = !gameTurn;
    if (gameTurn) {
        player1.classList.add('active');
        player2.classList.remove('active');
    } else {
        player2.classList.add('active');
        player1.classList.remove('active');
    }
}


function addInCell(currElem, currentPlayer) {
    currElem.innerText = currentPlayer;
    aud.play();
    currElem.classList.add(currentPlayer);
}

resetBtn.addEventListener('click',()=>{
    location.reload();
});
