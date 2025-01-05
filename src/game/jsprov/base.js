
// bug filled :/ ill fix this later


//extra



// bg
let main = document.getElementById("main");
let canvas = document.getElementById("ctx");
let mainHeight = 460;
let mainWidth = 445;
let context = canvas.getContext("2d");


//class
//window.onload = function() {
    main.style.height = mainHeight;
    main.style.width = mainWidth;

    //marble
    let marbleHeight = 50;
    let marbleWidth = 50;
    let marbleY = mainWidth/2 - marbleWidth
    let marbleX = mainHeight/2 - marbleHeight

    let marble = {
        img : null,
        x : marbleX,
        y : marbleY,
        height : marbleHeight,
        width : marbleWidth
    }



    //drawmarble
    context.fillStyle = "green";
    context.fillRect(marble.x, marble.y, marble.height, marble.width);

    //dmimage
    marble1 = new Image();
    marble1.src = "./marble1.png";
    marble.img = marble1;
    marble1.onload = function() {
        context.drawImage(marble.img, marble.x, marble.y, marble.height, marble.width);
    }
//}





// dealing with adding images later especially cause selection