let players = ['x', 'o'];
let activePlayer = 0;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(row, col) {
  function putLabel() {
    if (!board[row][col]) {
      board[row][col] += (players[activePlayer]);
    }
  }

  putLabel();

  renderBoard(board);

  function checkWinnerHorizontally() {
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] !== players[activePlayer]) {
        return false;
      }
    }
    return true;
  }

  function checkWinnerVertically() {
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] !== players[activePlayer]) {
        return false;
      }
    }
    return true;
  }

  function checkWinnerDiagonally() {
    if (row === col) {
      for (let i = 0; i < board.length; i++) {
        if (board[i][i] !== players[activePlayer]) {
          return false;
        }
      }
      return true;
    }

    if (Number(row) + Number(col) === board.length - 1) {
      for (let i = 0; i < board.length; i++) {
        if (board[i][board.length - 1 - i] !== players[activePlayer]) {
          return false;
        }
      }
      return true;
    }
  }
  
  if (checkWinnerHorizontally() || checkWinnerVertically() || checkWinnerDiagonally()) {
    showWinner(activePlayer);
  }

  function changePlayer() {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  }

  changePlayer();
}