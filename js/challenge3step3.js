function drawCircle(locationX,locationY,sizeW,sizeH, fillColor) {
    noStroke();
    fill(fillColor);
     ellipse(locationX, locationY, sizeW, sizeH);

}





function setup() {
    createCanvas(windowWidth, windowHeight);
   // background(100)
    }

function draw() {
    //call the function


    var randomSize = random(50);
    var myColor = color(0,255,0);
    var randomX = random(windowWidth);
    var randomY = random(windowHeight);
     drawCircle(randomX,randomY, randomSize,randomSize, myColor);


    myColor = color(random(255), random(255), random(255));

    drawCircle(randomX,randomY, randomSize,randomSize, myColor);

    myColor = color(random(255),random(255),random(255));
    drawCircle(randomX,randomY, randomSize,randomSize, myColor);


   // background(100)
    //if(mouseX < 720/2) {
    //     fill(255,255,0);
     //   ellipse(mouseX, mouseY, 50, 50);

   // }else{
      //  fill(255,0,255);
     //  rect(mouseX - 25, mouseY - 25, 50, 50);

    }




