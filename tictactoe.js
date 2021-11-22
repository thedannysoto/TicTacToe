window.addEventListener('load', gameSetup);

function gameSetup() {

    for (let x = 1; x < 10; x++) {
        let square = this.document.getElementById(`${x.toString()}`);
        square.addEventListener('click', takeTurn);
    }
    let button = this.document.getElementById('reset');
    button.addEventListener('click', resetBoard);
}

let firstPlayer = true;

function resetBoard() {
    for (let x = 1; x < 10; x++) {
        let square = window.document.getElementById(`${x.toString()}`);
        square.innerHTML = "";
        square.classList.remove("player_one");
        square.classList.remove("player_two");
        square.classList.remove("winner");
        boxes[x-1] = '';
    }
    firstPlayer = true;
    gameSetup();
}

function takeTurn () {
    console.log("turn");
    if (this.innerHTML == "") {
        if (firstPlayer) {
            this.innerHTML = 'X';
            this.classList.add('player_one');
        } else {
            this.innerHTML = 'O';
            this.classList.add('player_two');
        }
        boxes[(parseInt(this.id)-1)] = this.innerHTML;
        let winCheck = isWinner();
        if (winCheck) {
            console.log(`${boxes[winCheck[0]]} wins!`);
            greenWinner(winCheck);
            removeListeners();
        } else if (isTie()) {
            console.log('Tie Game!');
            removeListeners();
        } else {
            firstPlayer = !firstPlayer;
        }
    }
}

function isWinner() {
    const winnerArrays = [
        [0, 1, 2],
        [3, 4, 6],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let x = 0; x < winnerArrays.length; x++) {
        if (boxes[(winnerArrays[x][0])] != '') {
            if (boxes[(winnerArrays[x][0])] == boxes[(winnerArrays[x][1])] &&
                boxes[(winnerArrays[x][1])] == boxes[(winnerArrays[x][2])]) {
                    return winnerArrays[x];
                }
        }
    }
    return false;
}

// This will hold the 'X's and 'O's
const boxes = ['', '', '', '', '', '', '', '', ''];


function isTie() {
    for (let x = 1; x < 10; x++) {
        if (boxes[x] == '') {
            return false;
        }
    }
    return true;
}

function removeListeners() {
    for (let x = 1; x < 10; x++) {
        let square = this.document.getElementById(`${x.toString()}`);
        square.removeEventListener('click', takeTurn);
    }
}

function greenWinner(array) {
    for (let x = 0; x < 3; x++) {
        let square = this.document.getElementById(`${(array[x] + 1).toString()}`);
        square.classList.add("winner");
    }
}
