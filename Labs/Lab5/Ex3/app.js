// Suhaib Kankodi 
// 2/17/22
// N220 #20816
// Over and Out

// Place square div on page (100px x 100px), with blue background 
// Use onmouseover & onmouseout to change div's color 
// Black when mouse is over div, back to blue when mouse is off

//get div from html
let dvBlkblu = document.getElementById("blkblu");

//style div square in js
dvBlkblu.innerHTML = "hover over me";
dvBlkblu.style.width = "100px";
dvBlkblu.style.height = "100px";
dvBlkblu.style.backgroundColor  = "#0000FF";
dvBlkblu.style.margin = "50px";

//create functions to change colors
//html has onmouseover = to this function 
function changeColor() {
    //change color to black when mouse is over div
    dvBlkblu.style.backgroundColor  = "#000000";
}
//html has onmouseout = to this function 
function colorReset() {
    //reset color to blue when mouse is not over div
    dvBlkblu.style.backgroundColor  = "#0000FF";
}
