import Heading from '../components/Heading/Heading';
import ScoreContextList from '../components/ScoreContextList/ScoreContextList';
import Nav from '../components/Nav/Nav';
import './ScorePage.css';

const ScorePage = () => {
  return (
    <main className='leaderboard'>
      <Heading>Your Score</Heading>
      <ScoreContextList />
      <Nav />
    </main>
  );
};

export default ScorePage;
