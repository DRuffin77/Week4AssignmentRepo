function setup() {
    createCanvas(720, 480);
   // background(100)
    }

function draw() {
    background(100)
    if(mouseX < 720/2) {
         fill(255,255,0);
        ellipse(mouseX, mouseY, 75, 75);

    }else{
        fill(255,0,100);
        rect(mouseX, mouseY, 75, 75);

    }
}
