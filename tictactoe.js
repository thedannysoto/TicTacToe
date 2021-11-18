window.addEventListener('load', function () {
    for (let x = 1; x < 10; x++) {
        let square = this.document.getElementById(`${x.toString()}`);
        square.addEventListener('click', takeTurn);
    }
})

let firstPlayer = true;

function takeTurn () {
    if (this.innerHTML == "") {
        // this.innerHTML = firstPlayer ? 'X': "O";
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

    // change to arrays like : [1, 2, 3], [4, 5, 6], etc.
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
        // change to : if (boxes[winnerArrays[x][0]] != '') etc
        if (boxes[(winnerArrays[x][0])] != '') {
            if (boxes[(winnerArrays[x][0])] == boxes[(winnerArrays[x][1])] &&
                boxes[(winnerArrays[x][1])] == boxes[(winnerArrays[x][2])]) {
                    return winnerArrays[x];
                }
        }
    }
    return false;
}

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

// This will hold the 'X's and 'O's
const boxes = ['', '', '', '', '', '', '', '', ''];
