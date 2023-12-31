import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<null | number>(null);
  const [board, setBoard] = useState<Array<null | number>>(Array(9).fill(null));

  function handleClick(index: number) {
    if (board[index] == null) {
      const newBoard = [...board];
      if (newBoard[index] === null && data == null) {
        newBoard[index] = 0;
      } else if (newBoard[index] === null && data === 0) {
        newBoard[index] = 1;
      } else {
        newBoard[index] = 0;
      }
      setData(newBoard[index]);
      setBoard(newBoard);
      console.log(data);
    }
  }

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-serif text-blue-500">tic tac toe</h1>
      <div className="w-52 h-52 grid grid-cols-3 gap-1 mt-4">
        {board.map((divs, index) => (
          <ul
            key={index}
            className="border border-gray-400 w-16 h-16 flex items-center justify-center text-4xl font-bold"
            onClick={() => handleClick(index)}
          >
            {divs}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
