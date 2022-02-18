// Suhaib Kankodi 
// 2/10/22
// N220 #20816
// Data

// make object with properties for graphic 
// draw to the screen using object data 
// create function taking object as argument
// have the function draw object to screen

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
    backgrouhnd(140, 200, 220);
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