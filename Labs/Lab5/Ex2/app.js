// Suhaib Kankodi 
// 2/17/22
// N220 #20816
// McDiv'ns

// Put a div on the page 
// When div is clicked, append text "mc" to its innerHTML
// After 3 clicks, have div show "divdivdiv"

//get div from html
let dvMcdiv = document.getElementById("mcdiv");
//define clicks and start at 0
let clicks = 0;
//style div square in js
dvMcdiv.innerHTML = "start";
dvMcdiv.style.width = "100px";
dvMcdiv.style.height = "100px";
dvMcdiv.style.backgroundColor  = "#d61515";
dvMcdiv.style.margin = "100px";

//create function to append text
//html has onclick = to function 
function mcText() {
    //let click count increase by 1 each run
    clicks++;
    //set if statement to append different text after 3 clicks
    if (clicks >= 3) {
        dvMcdiv.innerHTML = "divdivdiv";
    //set else statement to append text for clicks less than 3
    }else{
        dvMcdiv.innerHTML = "mc";
    }
}