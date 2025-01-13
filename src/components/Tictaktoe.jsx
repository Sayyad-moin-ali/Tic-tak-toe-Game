import React from 'react';
import { useState } from 'react';

const Tictaktoe = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xtern, setXtern] = useState(true)
    const [winner, setWinner] = useState(null)

    const renderSquare = (index) => {
        return (
            <button className="w-16 h-16 m-[1px] text-2xl bg-slate-50" onClick={() => handleClick(index)}>{board[index]}</button>
        );
    };
    const reset = () => {
        setBoard(Array(9).fill(null)); 
        setXtern(true);               
        setWinner(null);           
    };
    
    const handleClick = (index) => {
        if (board[index] != null) {
            return
        }
        if (winner) {
            return null
        }
        console.log(index, "click")
        const newBoard = [...board];
        newBoard[index] = xtern ? "X" : "O";
        setBoard(newBoard)
        setXtern(!xtern)
        const winnerCombination = checkWinner(newBoard);
        if (winnerCombination) {
            setWinner(newBoard[winnerCombination[0]])
        }
    }
   
    const checkWinner = (newBoard) => {
        const combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < combination.length; i++) {
            const [a, b, c] = combination[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
                return combination[i];
            }
        }
        return null
    }

    return (
        <div className="flex flex-col gap-7 items-center justify-center min-h-screen">
            <h1 className='text-2xl font-bold'>Lets play Tic-Tac-Toe</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="flex">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="flex">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="flex">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                {
                    winner && <h4 className='text-2xl font-bold '>{winner} is the winner of the game</h4>
                }
                 <button className='bg-black text-xl text-white px-4 py-2 mt-4 rounded-md' onClick={reset}>Play again</button>
            </div>
        </div>
    );
};

export default Tictaktoe;
