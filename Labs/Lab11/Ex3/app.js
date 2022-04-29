// Suhaib Kankodi 
// 4/14/22
// N220 #20816
// Flash Cards

// Create app that asks questions and reveals answers with buttons

//get elements from html
let answerDv = document.getElementById("answer");

function qAnda(event) {
    let flashCard = event.target.getAttribute("data-attribute");
    answerDv.innerHTML = "Answer: " + flashCard;
}