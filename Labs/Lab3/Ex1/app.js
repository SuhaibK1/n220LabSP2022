// Suhaib Kankodi 
// 2/3/22
// N220 #20816
// Drawing Drawer

// create composition of an object
// add x and y arguments
// place objects and have it follow mouse

//setup canvas with dimensions
function setup() {
    createCanvas (600, 600);
}

//draw function
function draw(x, y) {
    background(140, 200, 220);
    //object that follows mouse
    snowman(mouseX, mouseY);
    //objects in place
    snowman(100, 400);
    snowman(300, 400);
    snowman(500, 400);

}
//function of created object
function snowman(x, y) {
    //arms
    triangle(x-30, y+60, x-60, y+60, x-90, y+20);
    triangle(x+30, y+60, x+60, y+60, x+90, y+20);
    //body
    circle(x, y, 50);
    circle(x, y+60, 75);
    circle(x, y+140, 100);

}