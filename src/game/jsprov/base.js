
// bug filled :/ ill fix this later

// bg
let main;
let context;

//class
window.onload = function() {
    main = document.getElementById("main");
    context = main.getAttribute("2d")
    main.Height = mainHeight;
    main.Width = mainWidth;
}

//marble
let marbleHeight = 50;
let marbleWidth = 50;
let marbleY = mainWidth/2 - marbleWidth
let marbleX = mainHeight/2 - marbleHeight

let marble = {
    x : marbleX,
    y : marbleY,
    height : marbleHeight,
    width : marbleWidth
}

// dealing with adding images later especially cause selection