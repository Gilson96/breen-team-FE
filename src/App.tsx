import { Routes, Route } from 'react-router';
import SquaresContainer from './pages/SquaresContainer';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GamesPage from './pages/GamesPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Debugger from './components/Debugger/Debugger';
import Runner from './components/Runner/Runner';
import MemoryHeap from './components/MemoryGame/MemoryHeap';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route element={<SquaresContainer />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/leaderboards/:gameId?' element={<LeaderboardPage />} />
        {/* <Route path='/leaderboards/:gameId/:scoreId' element={<ProfilePage />} /> */}
        <Route path='/games' element={<GamesPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route path='/debugger' element={<Debugger />} />
      <Route path='/orcoftherings' element={<Runner />} />
      <Route path='/memoryheap' element={<MemoryHeap />} />
    </Routes>
  );
};

export default App;
