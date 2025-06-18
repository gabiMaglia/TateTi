import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const deriveWinner = (gameBoard, players) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const symbol = gameBoard[a.row][a.column];
    if (
      symbol &&
      symbol === gameBoard[b.row][b.column] &&
      symbol === gameBoard[c.row][c.column]
    ) {
      return {
        winner: players[symbol],
        winningSquares: combination,
      };
    }
  }
  return { winner: null, winningSquares: [] };
};

const deriveBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = deriveBoard(gameTurns);
  const { winner, winningSquares } = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  const activePlayer = deriveActivePlayer(gameTurns);

  const hanldeSelectSqare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer, playerName: players[currentPlayer] },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handleChangePlayersName = (symbol, newName) => {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <header>
        <img src="game-logo.png" alt="logo" />
        <h1>Ta-Te-Ti</h1>
      </header>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            onChangeName={handleChangePlayersName}
            name={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            onChangeName={handleChangePlayersName}
            name={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver handleRematch={handleRematch} winner={winner} />
        )}
        <GameBoard onSelectSquare={hanldeSelectSqare} board={gameBoard}  winningSquares={winningSquares}/>
      </div>
      
      <Log log={gameTurns} />
    </main>
  );
}

export default App;
