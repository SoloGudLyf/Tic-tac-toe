// Initialize a board array whose values will be 0
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//Initialize 2 player objects
let player1 = { name: "solo", score: 0 };
let player2 = { name: "godwin", score: 0 };

// Assign the divs to the board array
let clicked = true;
const getDivClicked = (function () {
  let cells = document.getElementsByClassName("board");
  console.log(cells);
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", (event) => {
      const divClassName = event.target.className;
      let cellClicked = divClassName.split(" ");
      console.log(cellClicked[0]);
      let divClicked = document.querySelector("." + cellClicked[0]);

      // Check if div already contains a value if yes then leave it as it is
      // If no then modify it and toggle between player states

      if (divClicked.textContent.trim() == "") {
        if (clicked) {
          divClicked.textContent = "X";
        } else {
          divClicked.textContent = "0";
        }
        clicked = !clicked;
      }

      if (divClassName == "cell1 board") {
        board[0] = 1;
      } else if (divClassName == "cell2 board") {
        board[1] = 1;
      } else if (divClassName == "cell3 board") {
        board[2] = 1;
      } else if (divClassName == "cell4 board") {
        board[3] = 1;
      } else if (divClassName == "cell5 board") {
        board[4] = 1;
      } else if (divClassName == "cell6 board") {
        board[5] = 1;
      } else if (divClassName == "cell7 board") {
        board[6] = 1;
      } else if (divClassName == "cell8 board") {
        board[7] = 1;
      } else if (divClassName == "cell9 board") {
        board[8] = 1;
      }
      console.log(board);
    });
  }
})();

//Check if a div has already been clicked if so then maintain the value it corresponds with in
// the object and DOM

// Set up a click event handler for all the divs and change their value to 1
// when clicked on the first time and 2 when clicked on the second time toggling between these
// two modes

//set up a conditional statement to get when a player wins or not or draw

// Display a message on the page as to which player has won and lost
