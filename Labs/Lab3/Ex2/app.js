// Suhaib Kankodi 
// 2/3/22
// N220 #20816
// Red Remover

// take a color as an argument
// set the red component of color to zero 
// return new color without red
// test function by drawing circle

//setup canvas to specified dimensions
function setup() {
    createCanvas (600,600);
}

//draw function
function draw() {
//    background(12, 134, 166);
    
    //fill color with red removed
    fill = redRemover( color(255, 200, 150) );
    //draw circle
    circle(250, 150, 50);
    

}
//create funtion to remove red color(c)
function redRemover(c) {
    //set red value to 0 and return value
    c.setRed(0);
    return c;

}
