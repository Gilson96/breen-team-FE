import classNames from 'classnames';
import type { MinesweeperCellData } from '../../types';
import './MinesweeperCell.css';

type MinesweeperCellProps = {
  cell: MinesweeperCellData;
  clickHandler: (x: number, y: number) => void;
};

const MinesweeperCell = ({ cell: { x, y, show }, clickHandler, ...rest }: MinesweeperCellProps) => {
  const cellClasses = classNames({
    minesweeperCell: true,
    show
  });
  return <div className={cellClasses} onClick={() => clickHandler(x, y)} {...rest}></div>;
};

export default MinesweeperCell;
