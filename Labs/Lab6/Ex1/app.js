// Suhaib Kankodi 
// 2/24/22
// N220 #20816
// Loop, but big

// Write a loop that displays in a div the 
// Numbers 1000, 2000, 3000, 4000, 5000
// Only one line of code inside of loop

//get div element from html
let bigNumbers = document.getElementById("bigNumbers");

//create array of numbers
let bigArray = [1000, 2000, 3000, 4000, 5000];

//create for loop
for(var i = 0; i < bigArray.length; i++) {
    //copy array to div in html
    bigNumbers.innerHTML = bigArray;
}

