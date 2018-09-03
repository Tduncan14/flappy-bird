// DRAWING THE Image
function draw(){
    ctx.drawImage(bg,0.0);
    ctx.drawImage(pipeNorth,pX,pY);
    ctx.drawImage(pipeSouth,pX,pY +Const);
    // drawing the ground
    ctx.drawImage(fg,0,cvs.height -fg.height);
    ctx.drawImage(bird,bX,bY);

    // on a keyDown event, the bird jump
    bY += gravity;
    // keeps drawing and running the function again and agian
    requestAnimationFrame(draw);
}

// calling the function
draw();
