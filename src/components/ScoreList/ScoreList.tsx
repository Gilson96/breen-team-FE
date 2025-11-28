import { useState, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getScores } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ScoreRow from '../ScoreRow/ScoreRow';
import Button from '../Button/Button';
import './ScoreList.css';
import type { Score } from '../../types';

const ScoreList = () => {
  const [scores, setScores] = useState<Score[]>([]);

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['scores'],
    queryFn: getScores
  });

  if (isLoading) {
    return <Loading>Loading scores</Loading>;
  }

  if (isError) {
    return <Error>{error as ReactNode}</Error>;
  }

  const handleClick = () => {};

  return (
    <>
      <ul className='scoreList'>
        {scores.map((score, i) => (
          <ScoreRow score={score} rank={i + 1} key={score.score_id} />
        ))}
      </ul>
      <Button>Load More Scores</Button>
    </>
  );
};

export default ScoreList;
