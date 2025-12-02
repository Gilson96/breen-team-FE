import { NavLink } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Heading from '../components/Heading/Heading';
import ScoreList from '../components/ScoreList/ScoreList';
import Nav from '../components/Nav/Nav';
import Error from '../components/Error/Error';
import { getGames } from '../api';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['games'],
    queryFn: getGames
  });

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (!isLoading) {
    return (
      <main className='leaderboard'>
        <Heading>Top Scores</Heading>
        <div className='gameSelection'>
          {data!.games
            .sort((a, b) => a.game_id - b.game_id)
            .map(({ game_id, name }) => (
              <NavLink to={`/leaderboards/${game_id}`} key={game_id}>
                {name}
              </NavLink>
            ))}
        </div>
        <ScoreList />
        <Nav />
      </main>
    );
  }
};

export default LeaderboardPage;
