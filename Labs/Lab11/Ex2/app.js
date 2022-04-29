// Suhaib Kankodi 
// 4/14/22
// N220 #20816
// Color Mixer

// Make app that mixes colors with RBG color values using buttons

//get elements from html
let colorDv = document.getElementById("color");
let numberDv = document.getElementById("number");

let red = 0;
let green = 0;
let blue = 0;

function mixColor(event) {
    let clr = event.target.getAttribute("color");
    let val = event.target.getAttribute("value");

    if(clr == "red") {
        red += val;
        colorDv.style.backgroundColor = "(red,green,blue)";
    }else if(clr == "green") {
        green += val;
        colorDv.style.backgroundColor = "(red,green,blue)";
    }else{
        blue += val;
        colorDv.style.backgroundColor = "(red,green,blue)";
    }
}