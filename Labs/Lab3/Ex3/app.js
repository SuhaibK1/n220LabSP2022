// Suhaib Kankodi 
// 2/3/22
// N220 #20816
// Polar Points

// add new function with argument to polar point (r)
// in the function set x, y variables to sin, cos
// at the end return createVector(x,y); 
// test by drawing  circle at res.x, res.y, 10

//setup canvas with dimensions
function setup() {
    createCanvas (600, 600);
}

//draw function
function draw() {
//    background(40, 160, 280);

    //test function by drawing circles at polar points
    let res = polarPoint(30);
    //place
    translate(250,250);
    //draw circle
    circle(res.x, res.y, 10);
}
//create function for polar points
function polarPoint(r) {
    //use given code pieces to set x,y values
    x = r * Math.sin(mouseX);
    y = r * Math.cos(mouseX);
    return createVector(x,y); 
}