var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images by storing an image into the variable
// giving it constuctors
var pipeSouth = new Image();
// giving them sources.
// the routes to the folder

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();

// load images by storing an image into the variable
// giving it constuctors
bird.src ="images/bird.png";
bg.src ="images/bg.png";
fg.src ="images/fg.png";
pipeNorth.src="images/pipeNorth.png";
pipeSouth.src="images/pipeSouth.png";

var gap = 85;
var constant ;
var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// adds an audio and stores in a variable
// every time the creature flies
var fly = new Audio();
var scor = new Audio ();

// adding the sound to the variables // updating
fly.src ="fly.mp3";
scor.src = "score.mp3";

// on key press down

document.addEventListener("keydown" ,moveUp);

function moveUp(){
    bY -= 25;
    // then the sound plays
    fly.play();
}

// storing the pipes in a array  because we need a lot of differnt pipes.
var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};


// logic of the game
alert("Keep moving forward");


// DRAWING THE Image
function draw(){
    for(var i =0; i<pipe.length;i++){
    ctx.drawImage(bg,0,0);
    // draws the pipe positon
    ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
    pipe[i].x--;
    if(pipe[i].x == cvs.width-188){
        // creates a new pipe at that position, if the already existing pipes reach a certain position
        pipe.push({
            x:cvs.width,
            y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
        });
    }
    // drawing the ground
    ctx.drawImage(fg,0,cvs.height -fg.height);
    ctx.drawImage(bird,bX,bY);

    // on a keyDown event, the bird jump
    bY += gravity;
    // keeps drawing and running the function again and agian
    requestAnimationFrame(draw);
}
}
// calling the function
draw();
