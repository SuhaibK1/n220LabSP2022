// Suhaib Kankodi 
// 2/17/22
// N220 #20816
// Peak Pixels

// Place a square div on page, 100px by 100px, green background
// When the div is clicked, make it increase by 10% each click

//get square div from html
let dvSquare = document.getElementById("square");

//style div square in js
//dvSquare.innerHTML = "test";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";
dvSquare.style.backgroundColor  = "#00FF00";
dvSquare.style.margin = "150px";

//create function to increase size
//html has onclick = to function 
function increaseSz() {
    //get old dimensions
    let oldWidth = dvSquare.offsetWidth;
    let oldHeight = dvSquare.offsetHeight;

    //create new dimension by * 1.1
    let newWidth = oldWidth * 1.1 + "px";
    let newHeight = oldHeight * 1.1 + "px";
    
    //set the square to new dimensions for each click
    dvSquare.style.width = newWidth;
    dvSquare.style.height = newHeight;
}