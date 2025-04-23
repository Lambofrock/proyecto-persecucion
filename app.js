const gameBoard = document.getElementById("game-board");

const PlayerCharacter = document.createElement("div");
PlayerCharacter.classList.add("player-character");
gameBoard.appendChild(PlayerCharacter);

PlayerCharacter.style.top = 0;
PlayerCharacter.style.left = 0;

let moveBy = 10;

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      PlayerCharacter.style.left =
        parseInt(PlayerCharacter.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      PlayerCharacter.style.left =
        parseInt(PlayerCharacter.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      PlayerCharacter.style.top =
        parseInt(PlayerCharacter.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      PlayerCharacter.style.top =
        parseInt(PlayerCharacter.style.top) + moveBy + "px";
      break;
  }
});
