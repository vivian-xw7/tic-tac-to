import Player from './components/Player';
import Gameboard from './components/Gameboard';
import Log from './components/Log';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns = useState(prevTurns => {
      const updateTurns = [{
        square: {
          row: rowIndex, col: colIndex
        },
        player: activePlayer
      }, ...prevTurns];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

      {/* LOG */}
      <Log />
    </main>
  )
}

export default App

// NOTE TO SELF: REVIEW MODULE 82 LIFTING STATE UP
