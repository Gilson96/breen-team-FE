import type { MinesweeperCellData } from '../../types';
import './MinesweeperCell.css';

type MinesweeperCellProps = {
  cell: MinesweeperCellData;
};

const MinesweeperCell = ({ cell }: MinesweeperCellProps) => {
  return (
    <div className='minesweeperCell'>
      {cell.x}
      {cell.y}
    </div>
  );
};

export default MinesweeperCell;
