import React,{useState} from "react";
import "./App.css";
import Player from "./components/player/player";
import Gameboard from "./components/gameboard/gameboard";

function App() {
const [activePlayer,setActivePlayer] = useState('X')

const handleActivePlayer = () => {
  setActivePlayer((prev) => prev === 'X' ? 'O' : 'X')
}
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol = "X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol = "O" isActive={activePlayer === 'O'} />
        </ol>
        <Gameboard onSelectSquare={handleActivePlayer} activeSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
