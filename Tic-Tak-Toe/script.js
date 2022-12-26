var drawMsg = document.getElementsByClassName('draw-msg');
var winMsg = document.getElementsByClassName('winner-msg');
let c = 0;
let turn = "X"
let isgameover = false;
var playerDisplay = document.querySelector('.info');
let body = document.getElementsByTagName('body');
let cheer = document.getElementById('cheer');
//Function to change turn 
const changeTurn = () => {
    if (turn == 'X') {
        cheer.src = '0018.gif';
    }
    else {
        cheer.src = '0012.gif';
    }
    playerDisplay.classList.remove(`player${turn}`);
    turn = turn === 'X' ? 'O' : 'X';
    playerDisplay.innerText = turn;
    playerDisplay.classList.add(`player${turn}`);
    return turn;
}

//Fuction to check checkWining status
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], // horizontal
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6], // verticle
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8], // diagonal check
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;

            for (var i = 0; i < winMsg.length; i++) {
                winMsg[i].classList.add('show');
            }
            document.querySelector('.winner').innerText = "Player with " + boxtexts[e[0]].innerText + " Won";
            // var x = document.createElement("https://media.tenor.com/-Yf9G_sGZ-8AAAAM/youre-a-winner-winner.gif"); 
        }
    })
}

//Gaming Part
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            if (turn == 'X') {
                boxtext.classList.remove('playerO');
                boxtext.classList.add('playerX');
            }
            else {
                boxtext.classList.remove('playerX');
                boxtext.classList.add('playerO');
            }
            boxtext.innerText = turn;
            c++;
            turn = changeTurn();
            if (c == 9) {
                for (var i = 0; i < drawMsg.length; i++) {
                    drawMsg[i].classList.add('show');
                }
            }
            checkWin();
            if (!isgameover) {

                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})


function reset() {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    for (var i = 0; i < winMsg.length; i++) {
        winMsg[i].classList.remove('show');
    }
    for (var i = 0; i < drawMsg.length; i++) {
        drawMsg[i].classList.remove('show');
    }
    c = 0;
    cheer.src = '0012.gif';
    playerDisplay.classList.remove('playerX');
    playerDisplay.classList.remove('playerO');
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}

