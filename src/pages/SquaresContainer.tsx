import { Outlet } from 'react-router';
import SquaresBackground from '../components/SquaresBackground/SquaresBackground';

const SquaresContainer = () => {
  return (
    <>
      <SquaresBackground />
      <Outlet />
    </>
  );
};

export default SquaresContainer;
