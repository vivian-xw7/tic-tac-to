const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            prevGameBoard[rowIndex][colIndex] = 'X';
        });
    }

    return (
        <ol id='game-board'>
          {initialGameBoard.map(
            (row, rowIndex) => <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
          )}
        </ol>
    );
}