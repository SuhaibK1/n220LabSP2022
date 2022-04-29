// Suhaib Kankodi 
// 4/14/22
// N220 #20816
// Array Bad Word 

// Recreate bad word catcher using the array.find and array.includes methods

//get elements from html
let usrInput = document.getElementById("usrInput");
let resultDv = document.getElementById("result");


//list bad words
let badWords = ["clear", "water", "tires"];

//function
function findWords() {
    //set starting tally count
    let total = 0;
    //split input string on spaces
    var inWords = usrInput.value.split(" ");
    usrInput.value = "";
    //create for loop
    for(let i = 0; i < inWords.length; i++) {
        if(badWords.includes(inWords[i])){
        total++;
            }
    //if statement to display results
    if(total == 0) {
        //display if there are no bad words
        resultDv.innerHTML = "No bad words found.";
    }else{
        //else display there are bad words and how many
        resultDv.innerHTML = "Bad word(s) detected. " + total + " bad words found.";
    //console.log(inWords);
    }

}
}