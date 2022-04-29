// Suhaib Kankodi 
// 3/24/22
// N220 #20816
// Passwod Protected

//create website to verify user entered input match system

//get elements from html
let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let resultDiv = document.getElementById("result");
//create function to verify inputs
function verification() {
    //set variable to input values
    let u = userName.value;
    let p = passWord.value;
    //create if statement to check if inputs match
    if (u == "Username" && p == "Password") {
        //display confirmation to user
        resultDiv.innerHTML = "Success";
    //else statement     
    }else{
        //display if information is wrong to user
        resultDiv.innerHTML = "Wrong information";
    }
}