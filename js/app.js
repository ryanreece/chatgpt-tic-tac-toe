// Define the players
const player1 = 'X';
const player2 = 'O';

// Start with player 1
let currentPlayer = player1;

// Initialize the game board as an empty 3x3 array
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Handle a cell being clicked
function cellClicked(row, col) {
  // Check if the cell has already been played
  if (board[row][col] === '') {
    // Mark the cell with the current player's symbol
    board[row][col] = currentPlayer;
    document.getElementsByClassName('row')[row].getElementsByClassName('cell')[col].innerHTML = currentPlayer;
    
    // Check for a win or tie
    if (checkWin()) {
      document.getElementById('message').innerHTML = currentPlayer + ' wins!';
      document.getElementById('message').style.display = 'block';
    } else if (checkTie()) {
      document.getElementById('message').innerHTML = 'Tie game!';
      document.getElementById('message').style.display = 'block';
    } else {
      // Switch to the other player's turn and hide the message
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      document.getElementById('message').style.display = 'none';
    }
  }
}


// Check if the game has been won
function checkWin() {
  // Check each row and column for a win
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
    if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }
  
  // Check the diagonals for a win
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
  
  // If no win condition is met, return false
  return false;
}

// Check if the game is tied
function checkTie() {
  // If any cell is still empty, the game is not tied
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  
  // If no empty cells are found, the game is tied
  return true;
}

// Reset the game board
function reset() {
  // Clear the board array and reset the display
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = player1;
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
  document.getElementById('message').style.display = 'none'; // Hide the message 
}
