
// storing the pipes in a array  because we need a lot of differnt pipes.
var pipe = [];

pipe[0]={
     x:cvs.width,
     y:0
};

// DRAWING THE Image
function draw(){
    for(var i =0; i<pipe.length;i++){
    ctx.drawImage(bg,0.0);
    // draws the pipe positon
    ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+Const);
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
