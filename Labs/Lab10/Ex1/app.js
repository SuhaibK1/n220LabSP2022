// Suhaib Kankodi 
// 4/14/22
// N220 #20816
// Just Average

// Create app that takes in list of numbers from user and split the list into array of numbers 
// Convert string version of numbers into number versions
// Loop through array, sum up values, calculate the average of the array, display to user
// Remove text from input so user can type in new numbers

//get elements from html
let usrInput = document.getElementById("usrInput");
let sumDiv = document.getElementById("Sum");
let avgDiv = document.getElementById("Avg");

//set global starting variables
let sum = 0;
let avg = 0;

//function to calculate sum and average of input
function numCalc() {
    //split input string of numbers
    var stringNums = usrInput.value;
    let myArray = stringNums.split(",");

    //create for loop
    for(let i = 0; i < myArray.length; i++) {
        //convert into number version and get sum
        sum += Number(myArray[i]);
        //display sum to user
        sumDiv.innerHTML = "The sum of your numbers is: " + sum;
        //get average of numbers
        avg = sum / myArray.length;
        //display average to user
        avgDiv.innerHTML = "The average of your numbers is: " + avg;
    }
//    console.log(sum);
//   console.log(avg);
}
