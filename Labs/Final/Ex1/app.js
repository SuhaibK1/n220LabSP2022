// Suhaib Kankodi 
// 4/29/22
// N220 #20816
// Concentration Game

// Create classic memory game with 4x4 grid of cards

document.addEventListener("DOMContentLoaded", () => {
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

cardsArray.sort(() => 0.5 - Math.random()); 

let grid = document.querySelector(".grid");
let resultDisplay = document.querySelector("#result");
let selectedCards = [];
let selectedCardsID = [];
let cardsRight = [];

//create function to set up the gameboard
function setUp() {
//create for loop
for(let i = 0; i < cardsArray.length; i++) {
    //create element for img
    let card = document.createElement("img");
    //set cards face down by setting image
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

    if (selectedCards[0] == selectedCards[1]) {
        alert("You found a pair!");
        cards[optionOneID].setAttribute("src", "Imgs/clear.jpg");
        cards[optionTwoID].setAttribute("src", "Imgs/clear.jpg");
        cardsRight.push(selectedCards);
    }else{
        cards[optionOneID].setAttribute("src", "Imgs/back.jpg");
        cards[optionTwoID].setAttribute("src", "Imgs/back.jpg");
        alert("Incorrect, try again");
    }
    selectedCards = [];
    selectedCardsID = [];
    resultDisplay.textContent = cardsRight.length;
    if (cardsRight.length == cardsArray.length/2) {
        resultDisplay.textContent = "Congratulations! Game over";
    }

}

function selectCard() {
    var cardID = this.getAttribute("data-id");
    selectedCards.push(cardsArray[cardID].name);
    selectedCardsID.push(cardID);
    this.setAttribute("src", cardsArray[cardID].img);

    if (selectedCards.length == 2) {
        setTimeout(checkPairs, 500);
    }
}
})
