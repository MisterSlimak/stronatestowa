function game1StartFunction() {
    var character = document.getElementById("character");


    // idzie w lewo
    function moveLeft(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        character.style.left = left - 2 + "px";
    
    }

    // idzie w prawo
    function moveRight(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        character.style.left = left + 2 + "px";

    }

    // działanie chodzenia w lewo i w prawo
    document.addEventListener("keydown", event => {
        if(both==0){
            both++;
            if(event.key==="ArrowLeft"){
                interval = setInterval(moveLeft, 1);
            }
            if(event.key==="ArrowRight"){
                interval = setInterval(moveRight, 1);
            }
        }
    });

    // jak puszczamy klawisz to przestaje chodzić
    document.addEventListener("keyup", event => {
        clearInterval(interval);
        both=0;
    });

}






