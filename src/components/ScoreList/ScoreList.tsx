import ScoreRow from '../ScoreRow/ScoreRow';
import './ScoreList.css';

const mockScores = [
  { score: 50, username: 'BHS' },
  { score: 72, username: 'KLM' },
  { score: 18, username: 'QRT' },
  { score: 91, username: 'ZXP' },
  { score: 44, username: 'MJN' },
  { score: 63, username: 'TUV' },
  { score: 27, username: 'WQH' },
  { score: 85, username: 'RDK' },
  { score: 39, username: 'FLS' },
  { score: 58, username: 'CPV' }
];

const ScoreList = () => {
  return (
    <ul className='scoreList'>
      <h2 className='scoreList__title'>Score List</h2>
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
    </ul>
  );
};

export default ScoreList;
