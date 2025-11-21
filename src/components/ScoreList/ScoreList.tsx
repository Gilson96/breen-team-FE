import ScoreRow from '../ScoreRow/ScoreRow';
import './ScoreList.css';

const ScoreList = () => {
  return (
    <ul className='scoreList'>
      <ScoreRow />
    </ul>
  );
};

export default ScoreList;
