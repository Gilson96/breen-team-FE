import { Routes, Route } from 'react-router';
import SquaresContainer from './pages/SquaresContainer';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GamesPage from './pages/GamesPage';
import AccountPage from './pages/AccountPage';
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
        <Route path='/leaderboards/:scoreId?' element={<LeaderboardPage />} />
        <Route path='/games' element={<GamesPage />} />
        <Route path='/account/:userId' element={<AccountPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route path='/debugger' element={<Debugger />} />
      <Route path='/orcoftherings' element={<Runner />} />
      <Route path='/memoryheap' element={<MemoryHeap />} />
    </Routes>
  );
};

export default App;
