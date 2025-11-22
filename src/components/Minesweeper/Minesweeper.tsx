import { useState, useEffect } from 'react';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import type { MinesweeperCellData } from '../../types';
import './Minesweeper.css';

const createGrid = () => {
  const grid = new Array(10).fill(new Array(10).fill(null));

  const initialisedGrid = grid.map((row, i) => {
    return row.map((_cell: null, j: number) => {
      return { x: j, y: i, hidden: true };
    });
  });

  return initialisedGrid;
};

const Minesweeper = () => {
  const [grid, setGrid] = useState<MinesweeperCellData[][]>(createGrid());
  const [timer, setTimer] = useState(0);
  const [flags, setFlags] = useState(99);

  const handleClick = (x: number, y: number) => {
    console.log(x, y);
  };

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Minesweeper</h1>
      <div className='minesweeper__container'>
        {grid.map(row =>
          row.map((cell: MinesweeperCellData) => (
            <MinesweeperCell cell={cell} key={`${cell.x}${cell.y}`} clickHandler={handleClick} />
          ))
        )}
      </div>
    </main>
  );
};

export default Minesweeper;
