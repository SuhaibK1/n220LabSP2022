// Suhaib Kankodi 
// 2/10/22
// N220 #20816
// // World Wrap Refractor

// recode world wrap using an object


//set up ball object
let ball = {
    x: 0,
    y: 300,
    size: 50,
    color: "#eb9b37" 
}

//setup canvas to specified dimensions
function setup() {
    createCanvas (800, 600);
}

//draw function
function draw() {
    background(74, 168, 142);
//make ball move right 5 pixels/frame
    ball.x += 5;
//draw ball object
    circle(ball.x, ball.y, ball.size);

//ball to reset after reaching right edge
    if (ball.x > 800) {
//reset ball to left edge, restart ball and change color
        ball.x = 0;
        circle(ball.x, ball.y, ball.size);
        fill(ball.color);
    }
}