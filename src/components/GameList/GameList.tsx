import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import HomeButton from '../HomeButton/HomeButton';
import './GameList.css';

const GameList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['games'],
    queryFn: getGames
  });

  if (isLoading) {
    return <Loading>Loading games</Loading>;
  }

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  return data!.games.map(({ name }) => (
    <HomeButton to={`/${name.replaceAll(' ', '')}`}>{name}</HomeButton>
  ));
};

export default GameList;
