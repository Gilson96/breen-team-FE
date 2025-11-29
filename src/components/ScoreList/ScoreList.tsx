import { useInfiniteQuery } from '@tanstack/react-query';
import { getScores } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ScoreRow from '../ScoreRow/ScoreRow';
import type { Score } from '../../types';
import './ScoreList.css';
import Button from '../Button/Button';

const ScoreList = () => {
  const { isLoading, isError, data, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['scores'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => getScores(pageParam),
      getNextPageParam: (lastPage: { scores?: Score[] }, _allPages, lastPageParam: number) => {
        if (lastPage.scores === undefined || lastPage.scores.length < 10) return undefined;
        return lastPageParam + 1;
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
              return <ScoreRow score={score} rank={i * 10 + (j + 1)} key={score.score_id} />;
            })
          );
        })}
      </ul>
      {hasNextPage && (
        <Button onClick={fetchNextPage}>
          {isFetchingNextPage ? 'Loading scores' : 'Load more scores'}
        </Button>
      )}
    </>
  );
};

export default ScoreList;
