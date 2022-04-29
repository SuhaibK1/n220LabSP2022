// Suhaib Kankodi 
// 3/3/22
// N220 #20816
// UI Navigation Highlighter


// Make app with six divs on the screen, each with a different word. When any div is clicked:
// Highlight div by changing its background color and making the text bold
// Remove the bold/background highlight from any other divs
// Add the clicked div's text into a seperate div at the top of the screen

//get divs from html
let dvClicked = document.getElementById("clicked");
let dvFire = document.getElementById("fire");
let dvWater = document.getElementById("water");
let dvEarth = document.getElementById("earth");
let dvWind = document.getElementById("wind");
let dvLight = document.getElementById("light");
let dvSpace = document.getElementById("space");
//create function to highlight a clicked div
function onClick(hi) {
    //get element from html
    hilight = document.getElementById(hi);
    //change background color to highlighted
    hi.style.backgroundColor = "yellow";
    //change font to bold
    hi.style.text = bold;
    //add text from clicked div to a div at top
    dvClicked += id;
}

