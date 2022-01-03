let Game0Start = document.querySelector("#game0Check");
let Game1Start = document.querySelector("#game1Check");
let Game2Start = document.querySelector("#game2Check");
let Game3Start = document.querySelector("#game3Check");
let Game4Start = document.querySelector("#game4Check");

let Game0NameText = document.querySelector("#game0Name").textContent;
let Game1NameText = document.querySelector("#game1Name").textContent;
let Game2NameText = document.querySelector("#game2Name").textContent;
let Game3NameText = document.querySelector("#game3Name").textContent;
let Game4NameText = document.querySelector("#game4Name").textContent;

// function GameSwitcher() {
//     if (Game0Start.checked == true) {
//         function game0() {
//             document.querySelector(".game1").style.display = "block";
//             console.log("0");
//         }
//     } else if (Game1Start.checked == true) {
        
//             document.querySelector(".game1").style.display = "block";
//             console.log("1");
        
//     } else if (Game2Start.checked == true) {
//         function game3() {
//             console.log("2");
//         }
//     } else if (Game3Start.checked == true) {
//         function game3() {
//             console.log("3");
//         }
//     } else if (Game4Start.checked == true) {
//         function game4() {
//             console.log("4");
//         }
//     };
// };

function game0() {
    
    document.querySelector(".gameTitle").innerHTML = Game0NameText;
    console.log("0");
    document.querySelector(".game1").style.display = "none";
    document.querySelector(".game2").style.display = "none";
    document.querySelector(".game3").style.display = "none";
    document.querySelector(".game4").style.display = "none";
}

function game1() {
    document.querySelector(".gameTitle").innerHTML = Game1NameText;
    console.log("1");
    document.querySelector(".game1").style.display = "block";
    document.querySelector(".game2").style.display = "none";
    document.querySelector(".game3").style.display = "none";
    document.querySelector(".game4").style.display = "none";
}

function game2() {
    document.querySelector(".gameTitle").innerHTML = Game2NameText;
    console.log("2");
    document.querySelector(".game1").style.display = "none";
    document.querySelector(".game2").style.display = "block";
    document.querySelector(".game3").style.display = "none";
    document.querySelector(".game4").style.display = "none";
}

function game3() {
    document.querySelector(".gameTitle").innerHTML = Game3NameText;
    console.log("3");
    document.querySelector(".game1").style.display = "none";
    document.querySelector(".game2").style.display = "none";
    document.querySelector(".game3").style.display = "block";
    document.querySelector(".game4").style.display = "none";
}

function game4() {
    document.querySelector(".gameTitle").innerHTML = Game4NameText;
    console.log("4");
    document.querySelector(".game1").style.display = "none";
    document.querySelector(".game2").style.display = "none";
    document.querySelector(".game3").style.display = "none";
    document.querySelector(".game4").style.display = "block";
}