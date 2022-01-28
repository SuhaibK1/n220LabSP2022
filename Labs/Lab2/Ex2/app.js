// Suhaib Kankodi 
// 1/27/22
// N220 #20816
// Puck Side

//Create app that draws a circle where the mouse is
//When mouse is on right half, draw circle in red
//When mouse is on left half, draw circle in blue


//setup canvas to specified dimensions
function setup() {
    createCanvas (400,300);
}

//draw function for circle
function draw() {
//create circle that is drawn where mouse is at
    circle(mouseX, mouseY, 50);
//if statement for circle color
//different color for two sides, halway of canvas=200
if (mouseX > 200) {
//when mouse is on right half, fill circle red
    fill('red');
} else {
//when mouse is on left side, fill circle blue
    fill('blue');
    }
}
