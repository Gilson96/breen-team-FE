import { useParams } from 'react-router';
import './LeaderboardPage.css';
import Heading from '../components/Heading/Heading';
import ScoreList from '../components/ScoreList/ScoreList';
import Nav from '../components/Nav/Nav';

const LeaderboardPage = () => {
  const { scoreId } = useParams();

  return (
    <main className='leaderboard'>
      <Heading>{scoreId ? 'Your Score' : 'Top Scores'}</Heading>
      <ScoreList />
      <Nav />
    </main>
  );
};

export default LeaderboardPage;
