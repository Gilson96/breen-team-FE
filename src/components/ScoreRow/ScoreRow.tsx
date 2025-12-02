import classNames from 'classnames';
import type { Score } from '../../types';
import './ScoreRow.css';

type ScoreRowProps = {
  score: Score;
  rank: number;
  highlight: boolean;
};

const ScoreRow = ({ score: { username, score }, rank, highlight }: ScoreRowProps) => {
  const scoreRowClasses = classNames({
    scoreRow: true,
    highlight
  });

  return (
    <li className={scoreRowClasses}>
      <span className='scoreRow__rank'>{rank}.</span>
      <span className='scoreRow__username'>{username}</span>
      <span className='scoreRow__score'>{score}</span>
    </li>
  );
};

export default ScoreRow;
