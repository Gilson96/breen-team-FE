import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getScoresByGameAndScoreId } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ScoreRow from '../ScoreRow/ScoreRow';
import './ScoreContextList.css';

const ScoreContextList = () => {
  const { gameId, scoreId } = useParams();

  const { isLoading, isError, data, error, isRefetching } = useQuery({
    queryKey: ['scoreContext'],
    queryFn: async () => getScoresByGameAndScoreId(Number(gameId), Number(scoreId)),
    refetchOnMount: 'always'
  });

  if (isLoading || isRefetching) {
    return <Loading>Loading scores</Loading>;
  }

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <>
      <ul className='scoreList'>
        {data!.scores.map(score => {
          return (
            <ScoreRow
              score={score}
              rank={Number(score.rank)}
              highlight={score.score_id === Number(scoreId)}
              key={score.score_id}
            />
          );
        })}
      </ul>
      {/* )} */}
    </>
  );
};

export default ScoreContextList;
