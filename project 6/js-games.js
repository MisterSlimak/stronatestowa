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



// function game0() {
    
//     document.querySelector(".gameTitle").innerHTML = Game0NameText;
//     console.log("0");
//     document.querySelector(".game1").style.display = "none";
//     document.querySelector(".game2").style.display = "none";
//     document.querySelector(".game3").style.display = "none";
//     document.querySelector(".game4").style.display = "none";
// }

// function game1() {
//     document.querySelector(".gameTitle").innerHTML = Game1NameText;
//     console.log("1");
//     document.querySelector(".game1").style.display = "block";
//     document.querySelector(".game2").style.display = "none";
//     document.querySelector(".game3").style.display = "none";
//     document.querySelector(".game4").style.display = "none";
//     game1StartFunction();
// }

// function game2() {
//     document.querySelector(".gameTitle").innerHTML = Game2NameText;
//     console.log("2");
//     document.querySelector(".game1").style.display = "none";
//     document.querySelector(".game2").style.display = "block";
//     document.querySelector(".game3").style.display = "none";
//     document.querySelector(".game4").style.display = "none";
// }

// function game3() {
//     document.querySelector(".gameTitle").innerHTML = Game3NameText;
//     console.log("3");
//     document.querySelector(".game1").style.display = "none";
//     document.querySelector(".game2").style.display = "none";
//     document.querySelector(".game3").style.display = "block";
//     document.querySelector(".game4").style.display = "none";
// }

// function game4() {
//     document.querySelector(".gameTitle").innerHTML = Game4NameText;
//     console.log("4");
//     document.querySelector(".game1").style.display = "none";
//     document.querySelector(".game2").style.display = "none";
//     document.querySelector(".game3").style.display = "none";
//     document.querySelector(".game4").style.display = "block";
// }


//krótsza alternatywa powyższego zakomentowanego kodu
function game(gameNumber, gameNameText) { 
    var gameClasses = [".game0",".game1", ".game2", ".game3", ".game4"]
    document.querySelector(".gameTitle").innerHTML = gameNameText;
    console.log(gameNumber);
    for (var i = 0; i < gameClasses.length; i++){
        if(i != gameNumber){
            document.querySelector(gameClasses[i]).style.display = "none";
        }else{
            document.querySelector(gameClasses[i]).style.display = "block";
        }
    }
}