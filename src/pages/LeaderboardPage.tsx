import Heading from '../components/Heading/Heading';
import ScoreList from '../components/ScoreList/ScoreList';
import Nav from '../components/Nav/Nav';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  return (
    <main className='leaderboard'>
      <Heading>Top Scores</Heading>
      <ScoreList />
      <Nav />
    </main>
  );
};

export default LeaderboardPage;
