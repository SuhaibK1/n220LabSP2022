// Suhaib Kankodi 
// 4/14/22
// N220 #20816
// Color Changer

// Create app with three grey square divs that change to the colors red, green, and blue once clicked

//get elements from html
let redDv = document.getElementById("red");
let greenDv = document.getElementById("green");
let blueDv = document.getElementById("blue");
//use addEventListener on divs
redDv.addEventListener("click", click);
greenDv.addEventListener("click", click);
blueDv.addEventListener("click", click);
//create function to change color on click
function click(event) {
    //get color of each div from html
    let newColor = event.target.getAttribute("color");
    //change grey color of div to new color
    event.target.style.backgroundColor = newColor;
}