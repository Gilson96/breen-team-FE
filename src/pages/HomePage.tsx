import Orc from '../components/Orc/Orc';
import HomeButton from '../components/HomeButton/HomeButton';
import LogInButton from '../components/LogInButton/LogInButton';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className='homePage'>
      <div className='homePage__title'>
        <Orc />
        <h1>
          {' '}
          Burnout <br />
          <span>Breakers</span>
        </h1>
      </div>
      <HomeButton to='/games' animate>
        View Games
      </HomeButton>
      <HomeButton to='/leaderboards'>View Leaderboards</HomeButton>
      <LogInButton />
    </main>
  );
};

export default HomePage;
