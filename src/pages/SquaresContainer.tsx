import { Outlet } from 'react-router';
import SquaresBackground from '../components/SquaresBackground/SquaresBackgrouond';

const SquaresContainer = () => {
  return (
    <>
      <SquaresBackground />
      <Outlet />
    </>
  );
};

export default SquaresContainer;
