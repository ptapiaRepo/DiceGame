var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

whoWins(randomNumber1,randomNumber2);

function whoWins(player1, player2) {
  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
