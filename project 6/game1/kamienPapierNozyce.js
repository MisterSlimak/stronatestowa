let youChoice = document.querySelector('.youChoice')
let youResult = document.querySelector('.youResult')
let youScore = document.querySelector('.youScore')

let npcScore = document.querySelector('.npcScore')
let npcResult = document.querySelector('.npcResult')
let npcChoice = document.querySelector('.npcChoice')

let buttonPapper = document.querySelector('.papper')
let buttonRock = document.querySelector('.rock')
let buttonScissor = document.querySelector('.scissor')

let game1Button = document.querySelectorAll('.game1Button')

let youScoreArr = []
let npcScoreArr = []

function rockPaperScissorLoop() {
    // your pick
    youChoice.innerHTML = this.textContent

    // npc choice
    let npcRandom = Math.random() * 3
    if(npcRandom <= 1) {
        npcChoice.innerHTML = 'Rock'
    } else if (npcRandom <= 2) {
        npcChoice.innerHTML = 'Papper'
    } else {
        npcChoice.innerHTML = 'Scissor'
    }

    // game result
    if (youChoice.textContent === npcChoice.textContent) {
        // draw
        youResult.innerHTML = 'draw'
        npcResult.innerHTML = 'draw'
    } else if (
        (youChoice.textContent === 'Rock' & npcChoice.textContent === 'Scissor') ||
        (youChoice.textContent === 'Papper' & npcChoice.textContent === 'Rock') ||
        (youChoice.textContent === 'Scissor' & npcChoice.textContent === 'Papper')) {
        // win
        youResult.innerHTML = 'win'
        npcResult.innerHTML = 'lose'

        youScoreArr += '1' 
        youScore.innerHTML = youScoreArr.length
    } else {
        // lose
        youResult.innerHTML = 'lose'
        npcResult.innerHTML = 'win'

        npcScoreArr += '1' 
        npcScore.innerHTML = npcScoreArr.length
    }
}

game1Button.forEach((b) => b.addEventListener('click', rockPaperScissorLoop))