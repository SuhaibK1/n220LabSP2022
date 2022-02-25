// Suhaib Kankodi 
// 2/24/22
// N220 #20816
// Beep Bop

// Write loop that runs 25 times and writes the iterand onto the page in a div
// When the iterand is divisible by 3, write the word "beep" instead
// When the iterand is divisible by 5, write the word "bop" instead
// When the iterand is divisible by 3 AND 5, write "beepbop" instead

//get div from html
let beepBop = document.getElementById("beepBop");

//create for loop to run 25 times
for(var i = 0; i < 26; i++) {
    //if statement for when i if divisable by both 3 and 5
    //should only work for the number 15
    if(i % 3 == 0 && i % 5 == 0) {
        //write out word to div when true
        beepBop.innerHTML = "beepbop";
    }
    //else if for when i is only divisable by 3
    //should work for 3, 6, 9, 12, 18, 21, 24
    else if(i % 3 == 0) {
        //write out word to div when true
        beepBop.innerHTML = "beep";
    }
    //else if for when i is only divisable by 5
    //works for 5, 10, 20 ,25
    else if(i % 5 == 0) {
        beepBop.innerHTML = "bop";
    } 
    //finally wrtie out iterand to div
    else {
        beepBop.innerHTML = i;
    }
    console.log(i);


