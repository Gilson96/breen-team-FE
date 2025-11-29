import Heading from '../components/Heading/Heading';
import HomeButton from '../components/HomeButton/HomeButton';
import Nav from '../components/Nav/Nav';
import './GamesPage.css';

const GamesPage = () => {
  return (
    <main className='games'>
      <Heading>Games</Heading>
      <HomeButton to='/orcoftherings'>Orc of the Rings</HomeButton>
      <HomeButton to='/debugger'>Debugger</HomeButton>
      <HomeButton to='/memoryheap'>Memory Heap</HomeButton>
      <Nav />
    </main>
  );
};

export default GamesPage;
