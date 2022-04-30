// Suhaib Kankodi 
// 4/29/22
// N220 #20816
// Concentration Game

// Create classic memory game with 4x4 grid of cards

//create array of all card option pairs
let cardsArray = [
    //use name and add image for each card 
    {name: "ace", img: Imgs/ace.jpg}, {name: "ace", img: Imgs/ace.jpg},
    {name: "three", img: Imgs/three.jpg}, {name: "three", img: Imgs/three.jpg},
    {name: "four", img: Imgs/four.jpg}, {name: "four", img: Imgs/four.jpg},
    {name: "five", img: Imgs/five.jpg}, {name: "five", img: Imgs/five.jpg},
    {name: "seven", img: Imgs/seven.jpg}, {name: "seven", img: Imgs/seven.jpg},
    {name: "eight", img: Imgs/eight.jpg}, {name: "eight", img: Imgs/eight.jpg},
    {name: "nine", img: Imgs/nine.jpg}, {name: "nine", img: Imgs/nine.jpg},
    {name: "ten", img: Imgs/ten.jpg}, {name: "ten", img: Imgs/ten.jpg} ]

//set card array to randomize order to play game
cardsArray.sort(() => 0.5 - Math.random()); 

//get grid and item from html
let grid = document.querySelector(".grid");
let resultDisplay = document.querySelector("#result");
//set multiple empty arrays
let selectedCards = [];
let selectedCardsID = [];
let cardsRight = [];

//create function to set up the gameboard
function setUp() {
//create for loop
for(let i = 0; i < cardsArray.length; i++) {
    //create element for img
    let card = document.createElement("img");
    //set cards face down by setting image back
    card.setAttribute("src", "Imgs/back.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", selectedCards);
    grid.appendChild(card);
}
}
//create function to check is user selected a matching pair
function checkPairs() {
    let cards = document.querySelectorAll("img");
    const optionOneID = selectedCardsID[0];
    const optionTwoID = selectedCardsID[1];
    //create if statement to check if two cards match
    if (selectedCards[0] == selectedCards[1]) {
        //display to user 
        alert("You found a pair!");
        //"remove" pair found my setting image to clear
        cards[optionOneID].setAttribute("src", "Imgs/clear.jpg");
        cards[optionTwoID].setAttribute("src", "Imgs/clear.jpg");
        //set paired cards in right array
        cardsRight.push(selectedCards);
    //set else statement if selected cards are not a pair    
    }else{
        //set selected cards back down by reverting image to back
        cards[optionOneID].setAttribute("src", "Imgs/back.jpg");
        cards[optionTwoID].setAttribute("src", "Imgs/back.jpg");
        //display result to usee
        alert("Incorrect, try again");
    }
    //use arrays to determine if game is over
    selectedCards = [];
    selectedCardsID = [];
    resultDisplay.textContent = cardsRight.length;
    //create if statement to check when all pairs are found
    if (cardsRight.length == cardsArray.length/2) {
        //when complete display completion to user
        resultDisplay.textContent = "Congratulations! Game over";
    }

}
//create function for user to select cards
function selectCard() {
    //get cards selected by user are store in array
    var cardID = this.getAttribute("data-id");
    selectedCards.push(cardsArray[cardID].name);
    selectedCardsID.push(cardID);
    this.setAttribute("src", cardsArray[cardID].img);
    //set if statement for cards to be checked for .5 seconds
    if (selectedCards.length == 2) {
        setTimeout(checkPairs, 500);
    }
}