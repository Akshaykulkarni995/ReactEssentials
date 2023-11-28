import React from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Gameboard = ({onSelectSquare,activeSymbol}: any) => {
  const [boardState, setBoard] = React.useState(initialBoard);

  const handleSelectSquare = (rowIndex: any, colIndex: any) => {
    setBoard((prevBoard) => {
      const updateGameboard = [
        ...prevBoard.map((innerArray) => [...innerArray]),
      ];
      updateGameboard[rowIndex][colIndex] = activeSymbol
      return updateGameboard;
    });
    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {boardState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;
