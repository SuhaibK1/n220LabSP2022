// Suhaib Kankodi 
// 3/24/22
// N220 #20816
// Tip Calculator

// Create website to calculate tip based on 15% 

//get elements from html
let usrNumber = document.getElementById("usrNumber");
let priceDiv = document.getElementById("price");
//set variables
let tip = 0;
let total = 0;
//create function to calculate amounts
function tipCalculator() {
    //set input as value
    let dollar = usrNumber.value;
    //calculate amounts based on 15% tip
    tip = "Tip: $" + dollar * 0.15;
    total = "Total: $" + dollar * 1.15;
    //output to console
    console.log(tip);
    console.log(total);                          
    //display amounts to user
    priceDiv.innerHTML = tip + " and " + total;
}

