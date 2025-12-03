import Orc from '../components/Orc/Orc';
import HomeButton from '../components/HomeButton/HomeButton';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className='homePage'>
      <div className='homePage__title'>
        <Orc />
        <h1>
          <span>Burnout</span>
          <span>Break</span>
        </h1>
      </div>
      <HomeButton to='/games' animate>
        View Games
      </HomeButton>
      <HomeButton to='/leaderboards/1'>View Leaderboards</HomeButton>
    </main>
  );
};

export default HomePage;
