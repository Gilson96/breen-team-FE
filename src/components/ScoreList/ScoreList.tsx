import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getScores } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ScoreRow from '../ScoreRow/ScoreRow';
import Button from '../Button/Button';
import './ScoreList.css';

const ScoreList = () => {
  const { scoreId } = useParams();

  console.log(scoreId);

  const { isLoading, isError, data, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['scores'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getScores(pageParam, scoreId),
      getNextPageParam: lastPage => {
        if (lastPage.scores === undefined || lastPage.scores.length < 10) return undefined;
        return lastPage.page + 1;
      }
    });

  if (isLoading) {
    return <Loading>Loading scores</Loading>;
  }

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <>
      <ul className='scoreList'>
        {data!.pages.map((page, i) => {
          return (
            page.scores &&
            page.scores.map((score, j) => {
              return (
                <ScoreRow
                  score={score}
                  rank={i * 10 + (j + 1)}
                  key={score.score_id}
                  highlight={Number(scoreId) === score.score_id}
                />
              );
            })
          );
        })}
      </ul>
      {hasNextPage && !scoreId && (
        <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading scores' : 'Load more scores'}
        </Button>
      )}
    </>
  );
};

export default ScoreList;
