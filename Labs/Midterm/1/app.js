// Suhaib Kankodi 
// 3/1/22
// N220 #20816
// Midterm #1

//Use array with the values "up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"
// Write the values of the array out into a DIV, separated by dashes ( - )
// Use a for loop to write these values out

//get div from html
let dvValues = document.getElementById("values");

//create array
valuesArray = ["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];

//create for loop
for(i = 0; i < valuesArray.length; i++) {
    console.log(i);
    //write all values in array with a dash sperating them
    dvValues.innerHTML = valuesArray[i] + " - ";
    console.log(valuesArray[i]);
}