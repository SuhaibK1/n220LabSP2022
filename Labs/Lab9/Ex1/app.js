// Suhaib Kankodi 
// 4/7/22
// N220 #20816
// Divisible by 7

//

//get elements from html
let usrInput = document.getElementById("usrInput");
let resultDiv = document.getElementById("result");

//create function to check if divisible by 7
function verification() {
    //set variable to input values
    let number = usrInput.value;
    if(number % 7 == 0){
        number = true;
        console.log(number);
        resultDiv.innerHTML = "Your number IS divisible by 7";
        
    }else{
        number = false;
        console.log(number);
        resultDiv.innerHTML = "Your number IS NOT divisible by 7";
    }
}