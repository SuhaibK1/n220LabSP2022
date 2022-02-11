// Suhaib Kankodi 
// 2/10/22
// N220 #20816
// Virtual Pet

//creat virtual pet object
let pet = {
    x: mouseX,
    y: mouseY,
    size: 50,
    color: "black",
    offsetX: 5
};

//setup canvas to specified dimensions
function setup()
 {
    createCanvas (600,600);
}

//draw function
function draw() {
    background(12, 134, 166);
    //if mouse is down - 1 from offsetX
        if(mousePressed){
        pet.offsetX =- 1;
    //if mouse is up + 1 to offsetX
    } else {
        pet.offsetX =+ 1;
    }

    fill(pet.color);
    //draw circle at mouse with offset in x direction
    circle(pet.x + pet.offsetX, pet.y, pet.size);
}
