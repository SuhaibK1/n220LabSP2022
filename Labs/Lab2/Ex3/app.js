// Suhaib Kankodi 
// 1/27/22
// N220 #20816
// World Wrap

//create app that starts drawing a ball on left edge
//make ball move to the right 5 pixels per frame
//when ball reaches 800 pixels to the right, reset ball to left edge


//set up global variable for ball to start on left
let xPos = 0;
//setup canvas to specified dimensions
function setup() {
    createCanvas (800, 600);
}

//draw function for ball
function draw() {
//light green background color
    background(74, 168, 142);
//make ball move right 5 pixels/frame
    xPos += 5;
//create ball in middle
    circle(xPos, 300, 50);

//ball to reset after reaching right edge
    if (xPos > 800) {
//reset ball to left edge, restart ball and change color
        xPos = 0;
        circle(xPos, 300, 50);
        fill(230, 110, 30);
    }
}