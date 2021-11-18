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
        boxes[parseInt(this.id)] = this.innerHTML;
        let winCheck = isWinner();
        if (winCheck) {
            console.log(`${winCheck} wins!`);
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
        [boxes[1], boxes[2], boxes[3]],
        [boxes[4], boxes[5], boxes[6]],
        [boxes[7], boxes[8], boxes[9]],
        [boxes[1], boxes[4], boxes[7]],
        [boxes[2], boxes[5], boxes[8]],
        [boxes[3], boxes[6], boxes[9]],
        [boxes[1], boxes[5], boxes[9]],
        [boxes[3], boxes[5], boxes[7]]
    ];

    for (let x = 0; x < winnerArrays.length; x++) {
        if (winnerArrays[x][0] != '') {
            if (winnerArrays[x][0] == winnerArrays[x][1] &&
                winnerArrays[x][1] == winnerArrays[x][2]) {
                    return winnerArrays[x][0];
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

let boxes = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
}
