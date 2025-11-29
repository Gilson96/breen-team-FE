import classNames from 'classnames';
import { Bug, Flag } from '@nsmr/pixelart-react';
import type { SyntheticEvent } from 'react';
import type { DebuggerCellData } from '../../types';
import './DebuggerCell.css';

type DebuggerCellProps = {
  cell: DebuggerCellData;
  leftClickHandler: (x: number, y: number) => void;
  rightClickHandler: (e: SyntheticEvent, x: number, y: number) => void;
};

const MinesweeperCell = ({
  cell: { x, y, show, bug, flag, proximity },
  leftClickHandler,
  rightClickHandler,
  ...rest
}: DebuggerCellProps) => {
  const cellClasses = classNames({
    minesweeperCell: true,
    show,
    bug
  });
  return (
    <div
      className={cellClasses}
      onClick={() => leftClickHandler(x, y)}
      onContextMenu={e => rightClickHandler(e, x, y)}
      {...rest}
    >
      {bug && <Bug className='bug' />}
      {proximity > 0 && <span className={`proximity${proximity}`}>{proximity}</span>}
      {flag && <Flag className='flag' />}
    </div>
  );
};

export default MinesweeperCell;
