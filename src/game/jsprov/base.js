
// bug filled :/ ill fix this later


//extra



// bg
this.main;
this.mainHeight = 460;
this.mainWidth = 445;
this.context;


//class
window.onload = function() {
    main = document.getElementById("main");
    myCanvas = document.getElementById('canvas');
    main.Height = mainHeight;
    main.Width = mainWidth;
}

//marble
this.marbleHeight = 50;
this.marbleWidth = 50;
this.marbleY = mainWidth/2 - marbleWidth
this.marbleX = mainHeight/2 - marbleHeight

this.marble = {
    x : marbleX,
    y : marbleY,
    height : marbleHeight,
    width : marbleWidth
}



//drawmarble
context = canvas.getContext("2d");
context.fillStyle = "green";
context.fillRect(marble.X, marble.Y, marble.height, marble.width);



// dealing with adding images later especially cause selection