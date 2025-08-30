// Initialize board array

let board = Array(9).fill("");
let currentPlayer = "X";
let phase = "placement";
let gameBoard = document.querySelector(".gameboard");
let piecesPlaced = { X: 0, O: 1 };
let selected = [];
let restartBtn = document.querySelector(".restart");
let announcement = document.querySelector(".announcement");

function connectBoard() {
  for (let i = 0; i < gameBoard.children.length; i++) {
    board[i] = gameBoard.children[i].textContent;
  }
  console.log(board);
}
function makeMove(arr, index, cell) {
  if (arr[index] === "") {
    arr[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (currentPlayer == "X") {
      piecesPlaced.X += 1;
    } else {
      piecesPlaced.O += 1;
    }
    console.log(piecesPlaced);

    currentPlayer = currentPlayer == "X" ? "O" : "X";
  } else {
    console.log("Invalid move");
  }
  if (checkWinner(board) === true) {
    return "Game over";
  }
  connectBoard();
}

function allEqual(arr) {
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "") return false;
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

function checkWinner(board) {
  let winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6], // Diagonal /
  ];
  for (let combo of winningCombinations) {
    let line = [board[combo[0]], board[combo[1]], board[combo[2]]];
    if (allEqual(line) == true && line[0] !== "" && line[1] !== "") {
      announcement.textContent = `Player ${line[0]} wins`;
      console.log([board[([combo[0]], board[combo[1]], board[combo[2]])]]);
      connectBoard();
      console.log(line);
      return true;
    }
  }
  return false;
}

function placePiece(arr, initial, final) {
  let finalPos = final.cell.textContent;

  if (finalPos == "") {
    let pieceSelected = initial.cell.textContent;
    console.log(pieceSelected);
    initial.cell.textContent = "";
    arr[initial] = "-";
    final.cell.textContent = pieceSelected;
    selected = [];
    arr.splice(final, 0, pieceSelected);
  } else {
    selected = [];
  }
  if (checkWinner(board) === true) {
    return "Game over";
  }
}

gameBoard.addEventListener("click", function (e) {
  let cellIndex = Number(e.target.getAttribute("data-index"));
  let cellClicked = e.target;

  if (piecesPlaced.X < 4 && piecesPlaced.O < 4) {
    makeMove(board, cellIndex, cellClicked);
  } else {
    cell = { cell: cellClicked, index: cellIndex };
    selected.push(cell);
    console.log(selected);
    if (selected.length == 2) {
      placePiece(board, selected[0], selected[1]);
    } else if (selected.length > 2) {
      selected.shift();
    }
  }
});

function clearAll() {
  board = ["", "", "", "", "", "", "", "", ""];
  selected = [];
  for (let i = 0; i < gameBoard.children.length; i++) {
    gameBoard.children[i].textContent = "";
  }
  piecesPlaced.X = 0;
  piecesPlaced.O = 1;
  currentPlayer = "X";
  announcement.textContent = "";
}

restartBtn.addEventListener("click", () => clearAll());
