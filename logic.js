// DRAWING THE Image
function draw(){
    ctx.drawImage(bg,0.0);
    ctx.drawImage(pipeNorth,pX,pY);
    ctx.drawImage(pipeSouth,pX,pY +Const);
    // drawing the ground
    ctx.drawImage(fg,0,cvs.height -fg.height);

}