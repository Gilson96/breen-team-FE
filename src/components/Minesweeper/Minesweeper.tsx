import { useState } from 'react';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import type { MinesweeperCellData } from '../../types';
import './Minesweeper.css';

const createGrid = () => {
  const grid = new Array(15).fill(new Array(20).fill(null));

  const initialisedGrid = grid.map((row, i) => {
    return row.map((_cell: null, j: number) => {
      return { x: j, y: i, show: false };
    });
  });

  return initialisedGrid;
};

const Minesweeper = () => {
  const [grid, setGrid] = useState<MinesweeperCellData[][]>(createGrid());
  // const [timer, setTimer] = useState(0);
  // const [flags, setFlags] = useState(99);

  const handleClick = (x: number, y: number) => {
    setGrid(grid => {
      return grid.map(row => {
        return row.map(cell => (cell.x === x && cell.y === y ? { ...cell, show: true } : cell));
      });
    });
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
