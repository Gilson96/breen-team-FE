import GameList from '../components/GameList/GameList';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import './GamesPage.css';

const GamesPage = () => {
  return (
    <main className='games'>
      <Heading>Games</Heading>
      <GameList />
      <Nav />
    </main>
  );
};

export default GamesPage;
