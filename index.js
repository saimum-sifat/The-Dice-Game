let player1 = prompt("Name of Player 1:");
let player2 = prompt("Name of player 2:");

document.getElementsByClassName("dice")[0].querySelector("p").innerHTML =
  player1;
document.getElementsByClassName("dice")[1].querySelector("p").innerHTML =
  player2;

function diceGame() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let imageSource1 = "./images/dice" + randomNumber1 + ".png";
  let imageSource2 = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", imageSource1);
  document.querySelector(".img2").setAttribute("src", imageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = player1 + " Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = player2 + " Wins!";
  } else {
    document.querySelector("h1").innerText = "Draw! Try Again.";
  }
}

document.getElementById("refreshBtn").addEventListener("click", diceGame);
