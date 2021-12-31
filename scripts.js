// przycisk od lampki
let button = document.querySelector(".switchClick")
let body = document.querySelector("body")
let audio = document.querySelector("#audio")

button.onclick = function() {
    body.classList.toggle ('on');
    body.classList.toggle ('off');  // .lightBackground znika //
    audio.play();
    js_OnScroll(); 
    document.getElementById("arrowContainer").style.display = 'none';  // arrow znika //
}

// szerokości
function js_OnScroll() {

    // przsuwanie lampki i backgrounda
    var light = document.getElementById("light")
    var lightBackground = document.getElementById("lightBackground")
    scroll = window.pageYOffset;
    document.addEventListener('scroll',
        function (e) {
            var offset = window.pageYOffset;
            scroll = offset;

            if (scroll < 1600) {
                light.style.top = (200 + scroll) + 'px'; // przesuwanie lampki względem Y //
                lightBackground.style.top = (-80 + scroll) + 'px'; // przesuwanie backgrounda względem Y //
            }
        }
    )

    // dostep do roota
    var root = document.querySelector(':root');

    // odległości
    var lightProperty = document.querySelector('.light');
    var lightPropertyLeft = getComputedStyle(lightProperty).left;
    var lightPropertyTop = getComputedStyle(lightProperty).top;
    var lightPropertyWidth = getComputedStyle(lightProperty).width;

    var textProperty = document.querySelector(".text");
    var textPropertyLeft = getComputedStyle(textProperty).left;
    var textPropertyTop = getComputedStyle(textProperty).top;
    var textPropertyWidth = getComputedStyle(textProperty).width;

    var text2Property = document.querySelector("#text2");
    var text2PropertyLeft = getComputedStyle(text2Property).left;
    var text2PropertyTop = getComputedStyle(text2Property).top;
    var text2PropertyWidth = getComputedStyle(text2Property).width;

    var text3Property = document.querySelector("#text3");
    var text3PropertyLeft = getComputedStyle(text3Property).left;
    var text3PropertyTop = getComputedStyle(text3Property).top;
    var text3PropertyWidth = getComputedStyle(text3Property).width;

    var text4Property = document.querySelector("#text4");
    var text4PropertyLeft = getComputedStyle(text4Property).left;
    var text4PropertyTop = getComputedStyle(text4Property).top;
    var text4PropertyWidth = getComputedStyle(text4Property).width;

    var text5Property = document.querySelector("#text5");
    var text5PropertyLeft = getComputedStyle(text5Property).left;
    var text5PropertyTop = getComputedStyle(text5Property).top;
    var text5PropertyWidth = getComputedStyle(text5Property).width;

    // obliczenia
    var distanceLightTextWidth = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(textPropertyLeft, 10) - (parseInt(textPropertyWidth, 10) / 2)) + "px";
    var distanceLightTextHeight = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(textPropertyTop, 10)) + "px";
    var distanceLightTextWidthNoUnits = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(textPropertyLeft, 10) - (parseInt(textPropertyWidth, 10) / 2));
    var distanceLightTextHeightNoUnits = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text2PropertyTop, 10));
    var distanceLightText = Math.sqrt(Math.pow(distanceLightTextWidthNoUnits, 2) + Math.pow(distanceLightTextHeightNoUnits, 2)) + "px";

    var distanceLightText2Width = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text2PropertyLeft, 10) - (parseInt(text2PropertyWidth, 10) / 2)) + "px";
    var distanceLightText2Height = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text2PropertyTop, 10)) + "px";
    var distanceLightText2WidthNoUnits = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text2PropertyLeft, 10) - (parseInt(text2PropertyWidth, 10) / 2));
    var distanceLightText2HeightNoUnits = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text2PropertyTop, 10));
    var distanceLightText2 = Math.sqrt(Math.pow(distanceLightText2WidthNoUnits, 2) + Math.pow(distanceLightText2HeightNoUnits, 2)) + "px";

    var distanceLightText3Width = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text3PropertyLeft, 10) - (parseInt(text3PropertyWidth, 10) / 2)) + "px";
    var distanceLightText3Height = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text3PropertyTop, 10)) + "px";
    var distanceLightText3WidthNoUnits = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text3PropertyLeft, 10) - (parseInt(text3PropertyWidth, 10) / 2));
    var distanceLightText3HeightNoUnits = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text3PropertyTop, 10));
    var distanceLightText3 = Math.sqrt(Math.pow(distanceLightText3WidthNoUnits, 2) + Math.pow(distanceLightText3HeightNoUnits, 2)) + "px";

    var distanceLightText4Width = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text4PropertyLeft, 10) - (parseInt(text4PropertyWidth, 10) / 2)) + "px";
    var distanceLightText4Height = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text4PropertyTop, 10)) + "px";
    var distanceLightText4WidthNoUnits = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text4PropertyLeft, 10) - (parseInt(text4PropertyWidth, 10) / 2));
    var distanceLightText4HeightNoUnits = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text4PropertyTop, 10));
    var distanceLightText4 = Math.sqrt(Math.pow(distanceLightText4WidthNoUnits, 2) + Math.pow(distanceLightText4HeightNoUnits, 2)) + "px";

    var distanceLightText5Width = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text5PropertyLeft, 10) - (parseInt(text5PropertyWidth, 10) / 2)) + "px";
    var distanceLightText5Height = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text5PropertyTop, 10)) + "px";
    var distanceLightText5WidthNoUnits = (-1) * (parseInt(lightPropertyLeft, 10) + (parseInt(lightPropertyWidth, 10) / 2) - parseInt(text5PropertyLeft, 10) - (parseInt(text5PropertyWidth, 10) / 2));
    var distanceLightText5HeightNoUnits = (-1) * (parseInt(lightPropertyTop, 10) - parseInt(text5PropertyTop, 10));
    var distanceLightText5 = Math.sqrt(Math.pow(distanceLightText5WidthNoUnits, 2) + Math.pow(distanceLightText5HeightNoUnits, 2)) + "px";


    // implementacja
    root.style.setProperty("--LightTextWidith", distanceLightTextWidth);
    root.style.setProperty("--LightTextHeight", distanceLightTextHeight);
    root.style.setProperty("--distanceLightText", distanceLightText);

    root.style.setProperty("--LightText2Widith", distanceLightText2Width);
    root.style.setProperty("--LightText2Height", distanceLightText2Height);
    root.style.setProperty("--distanceLightText2", distanceLightText2);

    root.style.setProperty("--LightText3Widith", distanceLightText3Width);
    root.style.setProperty("--LightText3Height", distanceLightText3Height);
    root.style.setProperty("--distanceLightText3", distanceLightText3);

    root.style.setProperty("--LightText4Widith", distanceLightText4Width);
    root.style.setProperty("--LightText4Height", distanceLightText4Height);
    root.style.setProperty("--distanceLightText4", distanceLightText4);

    root.style.setProperty("--LightText5Widith", distanceLightText5Width);
    root.style.setProperty("--LightText5Height", distanceLightText5Height);
    root.style.setProperty("--distanceLightText5", distanceLightText5);
}
        
        
  