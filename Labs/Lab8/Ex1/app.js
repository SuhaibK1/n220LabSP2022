// Suhaib Kankodi 
// 3/24/22
// N220 #20816
// Greeter

// Create website that greets a user

//get elements from html
let usrName = document.getElementById("usrName");
let greetDiv = document.getElementById("greet");

function greeting() {
    let name = "Hello "+ usrName.value;
    console.log(name);

    greetDiv.innerHTML = name;
}