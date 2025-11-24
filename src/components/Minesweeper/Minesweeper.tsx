import { useEffect, useState, type SyntheticEvent } from 'react';
import { IoFlag } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import { calculateBugs, createGrid, revealBugs, revealGridRecursively } from './functions';
import type { MinesweeperCellData } from '../../types';
import './Minesweeper.css';

const gridDimensions: [number, number] = [20, 30];

const Minesweeper = () => {
  const [dimensions, setDimensions] = useState<[number, number]>(gridDimensions);
  const [grid, setGrid] = useState<MinesweeperCellData[][]>(createGrid(...gridDimensions));
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flags, setFlags] = useState(calculateBugs(...gridDimensions));

  useEffect(() => {
    //TODO: Make accurate and efficient
    setInterval(() => {
      setTime(currentTime => currentTime + 1);
    }, 1000);
  }, []);

  const handleLeftClick = (x: number, y: number) => {
    if (grid[y][x].bug) {
      setGameOver(true);
      const updated = revealBugs(grid);
      setGrid(updated);
    } else {
      const updated = revealGridRecursively(x, y, grid);
      setGrid(updated);
    }
  };

  const handleRightClick = (e: SyntheticEvent, x: number, y: number) => {
    e.preventDefault();

    const newGrid = structuredClone(grid);

    if (newGrid[y][x].flag) {
      setFlags(flags + 1);
      newGrid[y][x].flag = false;
    } else if (flags) {
      setFlags(flags - 1);
      newGrid[y][x].flag = true;
    }

    setGrid(newGrid);
  };

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Debugger</h1>
      <div className='minesweeper__details'>
        <span>
          <IoFlag />
          {flags}
        </span>
        <span>
          <FaClock />
          {time}
        </span>
      </div>
      {gameOver && <h3>You lose!</h3>}
      <div
        className='minesweeper__container'
        style={{ gridTemplateColumns: `repeat(${dimensions[0]}, 1fr)` }}
        onContextMenu={e => e.preventDefault()}
      >
        {grid.map(row =>
          row.map((cell: MinesweeperCellData) => (
            <MinesweeperCell
              cell={cell}
              key={cell.id}
              leftClickHandler={handleLeftClick}
              rightClickHandler={handleRightClick}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Minesweeper;
