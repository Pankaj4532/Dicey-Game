//alert("Welcome to the Dice Game!");
// This code simulates a dice roll and displays the result on the webpage.
/*
var randomNumber1= Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

var randomDiceImage = "dice"+ randomNumber1+".png";
var randomImageSource ="images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

// Set the source of the first image to the randomly selected dice image
image1.setAttribute("src", randomImageSource);
*/
/* for 2nd player */
/*
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 ="dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
// Set the source of the second image to the randomly selected dice image

image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins🚩";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";

}
else{
    document.querySelector("h1").innerHTML="Draw!!!";
}
    */



function closeModal() {
    document.getElementById("winner-modal").style.display = "none";
}


function rollDice() {
    const player1Name = document.getElementById("player1-name").value || "Player 1";
    const player2Name = document.getElementById("player2-name").value || "Player 2";

    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + num1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + num2 + ".png");

    let resultText = "";
    if (num1 > num2) {
        resultText = `${player1Name} wins 🚩`;
    } else if (num2 > num1) {
        resultText = `${player2Name} wins 🚩`;
    } else {
        resultText = `It's a Draw!`;
    }

    // ✅ Dynamic modal title
    const titles = ["🏆 Champion", "🎉 Result", "🔥 The Winner Is", "👑 Victory!", "🥇 Final Call"];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById("modal-title").textContent = randomTitle;

    // Show modal
    document.getElementById("winner-message").textContent = resultText;
    document.getElementById("winner-modal").style.display = "block";
}



