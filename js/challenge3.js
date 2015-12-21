function drawCircle(sizeW,sizeH) {
    noStroke();
    fill(255,0,0);
     ellipse(mouseX, mouseY, sizeW, sizeH);

}





function setup() {
    createCanvas(720, 480);
   // background(100)
    }

function draw() {
    //call the function
    drawCircle(random(50),random(50));

   // background(100)
    //if(mouseX < 720/2) {
    //     fill(255,255,0);
     //   ellipse(mouseX, mouseY, 50, 50);

   // }else{
      //  fill(255,0,255);
     //  rect(mouseX - 25, mouseY - 25, 50, 50);

    }




