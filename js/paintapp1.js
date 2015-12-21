var red, blue, yellow, redX, redY, blueX, blueY, yellowX, yellowY, circleX, circleY, circleSize;

//function drawLine(mouseX,mouseY,pmouseX,pmouseY){
//    stroke(255,0,0);
//    line(mouseX,mouseY,pmouseX,pmouseY);
//}


function setup() {
    createCanvas(windowWidth, windowHeight);
    red = color(255,0,0);
    yellow = color(255,255,0);
    blue = color(0,0,255);
    circleSize = 90;
    redX = 100;
    redY = 100;
    yellowX = 100;
    yellowY = 300;
    blueX = 100;
    blueY = 500;


    fill(red);
    ellipse(redX,redY,circleSize,circleSize);

    fill(yellow);
    ellipse(yellowX,yellowY,circleSize,circleSize);

    fill(blue);
    ellipse(blueX,blueY,circleSize,circleSize);
}

    function mouseClicked(){

        var redLine = dist(mouseX,mouseY,redX,redY);
        var yellowLine = dist(mouseX,mouseY,yellowX,yellowY);
        var blueLine = dist(mouseX,mouseY,blueX,blueY);

        if(redLine < circleSize) {
             stroke(255,0,0);
             drawLine(mouseX,mouseY,pmouseX,pmouseY);}
 }




//function draw() {
//
//
//    fill(red);
//    ellipse(redX,redY,circleSize,circleSize);
//
//    fill(yellow);
//    ellipse(yellowX,yellowY,circleSize,circleSize);
//
//    fill(blue);
//    ellipse(blueX,blueY,circleSize,circleSize);
//
//     if (mouseIsPressed)
//         line(mouseX,mouseY,pmouseX,pmouseY);
//
//}


