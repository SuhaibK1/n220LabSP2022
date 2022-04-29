// Suhaib Kankodi 
// 4/7/22
// N220 #20816
// Make Random

// Create website with a button that generates a random integer from 0 - 10

//get elements from html
let resultDiv = document.getElementById("result");

//create function to generate random number
function randomNum() {
    //use methods to get random integer 0-10
    let num = Math.floor(Math.random() * 11);
    //display number to user
    resultDiv.innerHTML = "Your Random Number is: " + num;
}