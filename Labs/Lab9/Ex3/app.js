// Suhaib Kankodi 
// 4/7/22
// N220 #20816
// Cleanup

// Create website that cleans up a string by removing any #'s

//get elements from html
let usrInput = document.getElementById("usrInput");
let resultDiv = document.getElementById("result");
//create function to remove any #s
function cleanUp() {
    //get value of input
    let words = usrInput.value;
    //replace all # with blank
    clean = words.replace(/#/g, "");
    //display result of string without #
    resultDiv.innerHTML = clean;
}