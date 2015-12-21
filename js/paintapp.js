//Global Variables

//colors
var red, blue, yellow;

// circle centers
var redX, redY, blueX, blueY, yellowX, yellowY;

//size of the circles
var circleSize;

//color of drawing line
var lineColor;


//function drawLine(mouseX,mouseY,pmouseX,pmouseY){
//    stroke(255,0,0);
//    line(mouseX,mouseY,pmouseX,pmouseY);
// }


function setup() {
    //create the canvas to be the window size
    createCanvas(windowWidth, windowHeight);
    //create three color variables
    red = color(255, 0, 0);
    yellow = color(255, 255, 0);
    blue = color(0, 0, 255);
    //set the size of the cirlces
    circleSize = 90;
    //set the location of the circles
    redX = 100;
    redY = 100;
    yellowX = 100;
    yellowY = 300;
    blueX = 100;
    blueY = 500;

    //set line color
    lineColor = red;

    //create the three circles
    fill(red);
    ellipse(redX, redY, circleSize, circleSize);

    fill(yellow);
    ellipse(yellowX, yellowY, circleSize, circleSize);

    fill(blue);
    ellipse(blueX, blueY, circleSize, circleSize);


} //end setup()

function draw() {
    if (mouseIsPressed) {
        //draw a line
        stroke(lineColor);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
} //end draw()


function mousePressed() {
    console.log('mouseClicked');
    var redLine = dist(mouseX, mouseY, redX, redY);
    var yellowLine = dist(mouseX, mouseY, yellowX, yellowY);
    var blueLine = dist(mouseX, mouseY, blueX, blueY);
    //
    if (redLine < circleSize) {
        //the clicked on the red circle
        //change the lineColor
        lineColor = red;
    }
    //
    if (yellowLine < circleSize) {
        //the clicked on the yellow circle
        //change the lineColor
        lineColor = yellow;
    }
    //
    if (blueLine < circleSize) {
        console.log("clicked blue");
        console.log("blueLine", blueLine);
        console.log("circleSize", circleSize);
        lineColor = blue;
    }
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
