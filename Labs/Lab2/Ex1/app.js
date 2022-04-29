// Suhaib Kankodi 
// 1/27/22
// N220 #20816
// Counter

// Create app that outputs a number to the console at every draw call
// Start console count at zero 
// Increase number by one every frame


//create global variable for a counter
let count = -1

//setup canvas with dimensions
function setup() {
    createCanvas (400, 400);
}

//draw function
function draw() {
//navy background color
    background(0, 12, 38);
//yellow text color, 30 size, and text with position
    fill(246, 255, 0);
    textSize(30);
    text('Counting to infinity...', 60, 200);

//started at -1 so with +1, first number in console log is 0   
//add 1 to count every frame, output number to console 
    count += 1;
    console.log(count);

}