import { Outlet } from 'react-router';
import LogInButton from '../components/LogInButton/LogInButton';
import SquaresBackground from '../components/SquaresBackground/SquaresBackground';

const SquaresContainer = () => {
  return (
    <>
      <LogInButton />
      <SquaresBackground />
      <Outlet />
    </>
  );
};

export default SquaresContainer;
