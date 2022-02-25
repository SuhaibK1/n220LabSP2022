// Suhaib Kankodi 
// 2/24/22
// N220 #20816
// Runner Up

// Create array with 3 race times with times in order, lowest to highest
// Write code that displays the runner-up times in two different divs

//get divs from html
let firstPlace = document.getElementById("firstPlace");
let secondPlace = document.getElementById("secondPlace");
let thirdPlace = document.getElementById("thirdPlace");

let raceTimes = [9.58, 9.99, 10.54];

firstPlace.innerHTML = "1st: " + raceTimes[0];
secondPlace.innerHTML = "2nd: " + raceTimes[1];
thirdPlace.innerHTML = "3rd: " + raceTimes[2];