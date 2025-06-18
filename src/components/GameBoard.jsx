const GameBoard = ({ board, onSelectSquare, winningSquares = [] }) => {
  const isWinning = (row, col) =>
    winningSquares.some(sq => sq.row === row && sq.column === col);

const handleClick = (e, row, col, cell) => {
  if (cell !== null) {
    const btn = e.currentTarget;
    btn.classList.remove('invalid');
    void btn.offsetWidth;
    btn.classList.add('invalid');
    return;
  }

  addRipple(e);
  onSelectSquare(row, col);
};

  const addRipple = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => {
              const classNames = [];
              if (cell === "X") classNames.push("x");
              if (cell === "O") classNames.push("o");
              if (isWinning(rowIndex, colIndex)) classNames.push("winning");
              if (cell !== null) classNames.push("disabled");

              return (
                <li key={colIndex}>
                  <button
                    className={['cell', ...classNames].join(' ')} 
                    onClick={(e) => handleClick(e, rowIndex, colIndex, cell)}                
                    aria-label={`Square ${rowIndex + 1}-${colIndex + 1}`}
                  >
                    {cell}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
