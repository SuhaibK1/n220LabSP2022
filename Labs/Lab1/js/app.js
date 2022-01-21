//Suhaib Kankodi 1/20/22

//create 3 variables for the shapes with set values
let shapeX = 525;
let shapeY = 475;
let shapeZ = 40;
//create the canvas
function setup() {
    createCanvas (900,800);
}

function draw() {
//set background color
    background(50, 0, 150);
//set border color and width
    stroke(255, 0, 0);
    strokeWeight(5);
//create two fill colors controlled by mouse press 
    if (mouseIsPressed) {
        fill(500);
    } else {
        fill(0);
    }
//create multiple shapes set to appear as a sword
    triangle(150, 220, 550, 480, 100, 50);
    square(shapeX, shapeY, shapeZ);
    circle(shapeX, shapeY, shapeZ);
    circle(500, 450, shapeZ);
    square(450, 400, 50);

}