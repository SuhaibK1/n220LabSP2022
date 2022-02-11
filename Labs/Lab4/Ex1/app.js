// Suhaib Kankodi 
// 2/10/22
// N220 #20816
// Data

// Make object with all the properties for a part on the screen - 
// width, height, color, position. Perhaps more. 
// draw that object to the screen using the data in your object.
// then create function to take argument and draw object to screen using argument 
// pass your object to that function as argument
// and have the function draw the object to screen

 //create object
let part = {
    width: 150, 
    height: 250, 
    color: "orange", 
    x: 150,
    y: 100
};
//setup canvas with dimensions
function setup() {
    createCanvas (600, 600);
}

//draw function
function draw() {
    background(140, 200, 220);
    //fill using object data
    fill(part.color);
    //draw oject to screen using data
    rect(part.x, part.y, part.width, part.height);
    creature(150, 50);

}
//create function taking object as argument
function creature(part) {
    rect(part.x, part.y, part.width, part.height);
}


//console.log(part.width);