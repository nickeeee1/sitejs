const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const lastScoreBoard = document.querySelector('.score-last')
const beastScoreBoard = document.querySelector('.score2')
const moles = document.querySelectorAll('.mole')

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let lastHole;
let timeUp = false;
let score = 0;
let scorelast = 0;
let beastScore = 0;

lastScoreBoard.textContent = localStorage.getItem('lastScore')
beastScoreBoard.textContent = localStorage.getItem('beastScore')

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(600, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
        else {
            lastScore = score
            localStorage.setItem('lastScore', score)
            lastScoreBoard.textContent = localStorage.getItem('lastScore');
            if (lastScore > beastScore) {
                beastScore = lastScore
                localStorage.setItem('beastScore', beastScore)
                beastScoreBoard.textContent = localStorage.getItem('beastScore');
            }

        }
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
    console.log(score)
}

function bonk (e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk))