import type { MinesweeperCellData } from '../../types';
import './MinesweeperCell.css';

type MinesweeperCellProps = {
  cell: MinesweeperCellData;
  clickHandler: () => void;
};

const MinesweeperCell = ({ cell, clickHandler, ...rest }: MinesweeperCellProps) => {
  return (
    <div className='minesweeperCell' onClick={() => clickHandler(cell.x, cell.y)} {...rest}></div>
  );
};

export default MinesweeperCell;
