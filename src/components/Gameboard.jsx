import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard({onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // adds an X or O when col is clicked
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id='game-board'>
          {gameBoard.map(
            (row, rowIndex) => <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
          )}
        </ol>
    );
}

// NOTE TO SELF: REVIEW MODULE 82 LIFTING STATE UP