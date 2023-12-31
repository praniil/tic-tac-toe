import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<null | number>(null);
  const [board, setBoard] = useState<Array<null | number>>(Array(9).fill(null));
  const initialBoardState = Array(9).fill(null);

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
      checkResult();
    } else {
      setData(null);
      setBoard(initialBoardState);
    }
  }

  useEffect(() => {
    console.log(board);
  }, [board, data]);

  useEffect(() => {
    console.log(board);
    checkResult();
  });

  function handleRestart() {
    setData(null);
    setBoard(initialBoardState);
  }

  function checkResult() {
    console.log(board);
    if (
      (board[0] === 0 && board[4] === 0 && board[8] === 0) ||
      (board[0] === 0 && board[3] === 0 && board[6] === 0) ||
      (board[1] === 0 && board[4] === 0 && board[7] === 0) ||
      (board[2] === 0 && board[5] === 0 && board[8] === 0) ||
      (board[0] === 0 && board[1] === 0 && board[2] === 0) ||
      (board[3] === 0 && board[4] === 0 && board[5] === 0) ||
      (board[6] === 0 && board[7] === 0 && board[8] === 0) ||
      (board[2] === 0 && board[4] === 0 && board[6] === 0)
    ) {
      alert("Player 1 wins");
      handleRestart();
    } else if (
      (board[0] === 1 && board[4] === 1 && board[8] === 1) ||
      (board[0] === 1 && board[3] === 1 && board[6] === 1) ||
      (board[1] === 1 && board[4] === 1 && board[7] === 1) ||
      (board[2] === 1 && board[5] === 1 && board[8] === 1) ||
      (board[0] === 1 && board[1] === 1 && board[2] === 1) ||
      (board[3] === 1 && board[4] === 1 && board[5] === 1) ||
      (board[6] === 1 && board[7] === 1 && board[8] === 1) ||
      (board[2] === 1 && board[4] === 1 && board[6] === 1)
    ) {
      alert("Player 2 wins");
      handleRestart();
    }
  }

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="font-serif text-4xl mb-4">Tic Tac Toe</h1>
      <h1 className="font-serif">Player 1: 0</h1>
      <h1 className="font-serif">Player 2: 1</h1>

      <div className="w-72 h-72 grid grid-cols-3 gap-2 mt-8">
        {board.map((divs, index) => (
          <button
            key={index}
            className="border border-gray-400 w-24 h-24 flex items-center justify-center text-4xl font-bold rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => handleClick(index)}
          >
            {divs}
          </button>
        ))}
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
