let order = []; // Empty counter to keep trucking the order of the light and how theyre going to flash by computer
let playerOrder = []; // Empty counter  to keep trucking the order of the light and how theyre going to flash by user
let flash;// Intijer- number of flashes that have appeared in the game
let turn;// What turn are we on?
let good;// Wheather the player is doing well or not- bulian
let compTurn; // Is it the computers turn or the players turn?
let intervalId;
let strict = false; //Are we in strict mode or not?
let noise = true; //Are we playing noise?
let bestScore = parseInt(localStorage.getItem('bestScore') || 0)

const turnCounter = document.querySelector("#turn"); //I can press any css selector
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const startButton = document.querySelector("#start");

// All variables are set up- we can start with the fun part
strictButton.addEventListener('change', (event) => {
    // console.log("checked")
    if (strictButton.checked == true) {
        strict = true
    } else {
        strict = false
    }
    // console.log(strict)
})


startButton.addEventListener('click', play);

function play() {
    order = []
    playerOrder = []
    flash = 0
    intervalId = 0
    turn = 1
    turnCounter.innerHTML = 1
    good = true
    for (let i = 0; i < bestScore; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true
    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    if (flash == turn) {
        clearInterval(intervalId)
        compTurn = false
        clearColor();
    }

    if (compTurn) {
        clearColor()
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200)
    }
}

function one() {
    if (noise) {
        let audio = document.getElementById("clip1")
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "#D0F5BE";
}
function two() {
    if (noise) {
        let audio = document.getElementById("clip2")
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "#FFACAC";
}
function three() {
    if (noise) {
        let audio = document.getElementById("clip3")
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "#FBFFDC";
}
function four() {
    if (noise) {
        let audio = document.getElementById("clip4")
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "#B6EAFA";
}

function clearColor() {
    topLeft.style.backgroundColor = "#00DFA2";
    topRight.style.backgroundColor = "#FF0060";
    bottomLeft.style.backgroundColor = "#F6FA70";
    bottomRight.style.backgroundColor = "#0079FF";
}

topLeft.addEventListener('click', (event) => {
    playerOrder.push(1);
    check();
    one();
})
topRight.addEventListener('click', (event) => {
    playerOrder.push(2);
    check();
    two();
})
bottomLeft.addEventListener('click', (event) => {
    playerOrder.push(3);
    check();
    three();
})
bottomRight.addEventListener('click', (event) => {
    playerOrder.push(4);
    check();
    four();
})

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) good = false
    if (playerOrder.length == bestScore.length && good) {
        winGame()
    }
    if (good == false) {
        flashColor();
        turnCounter.innerHTML = 'NO!'
        setTimeout(() => {
            turnCounter.innerHTML = turn
            clearColor()

            if (strict) {
                play()
            } else {
                compTurn = true
                flash = 0
                playerOrder = []
                good = true
                intervalId = setInterval(gameTurn, 800)
            }
        }, 800);

        noise = false
    }

    if (turn == playerOrder.length && good) {
        turn++
        playerOrder = []
        compTurn = true
        flash = 0
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800)
    }
}

function flashColor() {
    flashIntPar = setInterval(flashInt, 500)
    setTimeout(() => {
        clearInterval(flashIntPar)
        flashIntPar = null
    }, 2000)
}

function flashInt() {
    topLeft.style.backgroundColor = "#D0F5BE";
    topRight.style.backgroundColor = "#FFACAC";
    bottomLeft.style.backgroundColor = "#FBFFDC";
    bottomRight.style.backgroundColor = "#B6EAFA";
    setTimeout(clearColor, 200);
}

function winGame() {
    flashColor();
    let massage = document.createElement(`<div class="massage"></div>`)
    setTimeout(massage.innerHTML = "NEW BEST SCORE!", 2000)

    if (turn > bestScore) {
        localStorage.setItem('bestScore', turn);
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const storedBestScore = localStorage.getItem('bestScore');
//     if (storedBestScore !== null) {
//         bestScore = parseInt(storedBestScore);
//     }
// });


