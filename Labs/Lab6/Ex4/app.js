// Suhaib Kankodi 
// 2/24/22
// N220 #20816
// Favorray 

// Create a string array listing your 5 favorite things in the array
// Write a loop that writes to a div element each of them, 
// With the string ", is one of my favorite things." after the thing

//get div from html
let favorRay = document.getElementById("favorRay");

let favThings = ["Art", "Basketball", "Burgers", "Exploring", "Gaming"];

for(var i = 0; i < favThings.length; i++) {

    favorRay.innerHTML = favThings[i] + ", is one of my favorite things." + "<br />"; 
}
