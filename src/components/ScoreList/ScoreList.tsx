import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getScoresByGameId } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ScoreRow from '../ScoreRow/ScoreRow';
import Button from '../Button/Button';
import './ScoreList.css';
import { useEffect } from 'react';

const ScoreList = () => {
  const { gameId } = useParams();

  const {
    isLoading,
    isError,
    data,
    error,
    fetchNextPage,
    refetch,
    isRefetching,
    isFetchingNextPage,
    hasNextPage,
    isFetchedAfterMount
  } = useInfiniteQuery({
    queryKey: ['scores'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getScoresByGameId(pageParam, Number(gameId)),
    getNextPageParam: lastPage => {
      if (lastPage.scores === undefined || lastPage.scores.length < 10) return undefined;
      return lastPage.page + 1;
    },
    refetchOnMount: 'always'
  });

  useEffect(() => {
    refetch();
  }, [gameId, refetch]);

  if (isLoading || isRefetching || !isFetchedAfterMount) {
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
        <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading scores' : 'Load more scores'}
        </Button>
      )}
    </>
  );
};

export default ScoreList;
