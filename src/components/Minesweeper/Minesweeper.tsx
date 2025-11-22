import { useState } from 'react';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import type { MinesweeperCellData } from '../../types';
import './Minesweeper.css';

const Minesweeper = () => {
  const [timer, setTimer] = useState(0);
  const [flags, setFlags] = useState(99);

  const grid = new Array(10).fill(new Array(10).fill(null));

  const initialisedGrid = grid.map((row, i) => {
    return row.map((_cell: null, j: number) => {
      return { x: j, y: i, hidden: true };
    });
  });

  console.log(initialisedGrid);

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Minesweeper</h1>
      <div className='minesweeper__container'>
        {initialisedGrid.map(row =>
          row.map((cell: MinesweeperCellData) => (
            <MinesweeperCell cell={cell} key={cell.x.toString() + cell.y.toString()} />
          ))
        )}
      </div>
    </main>
  );
};

export default Minesweeper;
