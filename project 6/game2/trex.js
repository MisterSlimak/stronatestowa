
const character = document.getElementById("character2");
const object = document.getElementById("object2");


function jump(){
    if (character.classList != "jump") {
        character.classList.add("jump");

        setTimeout(function (){
            character.classList.remove("jump")
        }, 300);
    }
}

let isAlive = setInterval(() => {

    let dinoTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
    );
    
    let ObjectLeft = parseInt(
        window.getComputedStyle(object).getPropertyValue("left")
    );
    
    if (ObjectLeft < 100 && ObjectLeft > 0 && dinoTop >=400) {
        // alert("game over")
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});

