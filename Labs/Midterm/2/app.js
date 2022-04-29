// Suhaib Kankodi 
// 3/1/22
// N220 #20816
// Midterm #2

//Write an application that has a div with the word "yes" inside of it.
// When the div is clicked -
//If div has the word "yes" inside of it, cange the word to say "no"
//Otherwise, change the word to say "yes"
 
//get div from html
let dvAnswer = document.getElementById("answer");

let answer = "yes";
let newanswer = "no";
//style div
dvAnswer.style.width = "50px";
dvAnswer.style.height = "50px";
dvAnswer.style.backgroundColor = "#0000FF";
dvAnswer.style.margin = "150px";
dvAnswer.style.textAlign = "center";
dvAnswer.style.color = "#FFFFFF";
//put answer starting with yes in div
dvAnswer.innerHTML = answer;

function changeAnswer() {
    if(answer == "yes") {
        dvAnswer.innerHTML = newanswer;
    }else{
        dvAnswer.innerHTML = answer;
    }
}
