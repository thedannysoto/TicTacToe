window.addEventListener('load', function () {
    for (let x = 1; x < 10; x++) {
        let square = this.document.getElementById(`${x.toString()}`);
        square.addEventListener('click', takeTurn);
    }
  })

function takeTurn () {
    if (this.innerHTML == "") {
        this.innerHTML = firstPlayer ? 'X': "O";
        firstPlayer = !firstPlayer;
    }
}

let firstPlayer = true;