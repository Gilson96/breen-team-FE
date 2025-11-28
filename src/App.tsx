import { Routes, Route } from 'react-router';
import SquaresContainer from './pages/SquaresContainer';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GamesPage from './pages/GamesPage';
import Debugger from './components/Debugger/Debugger';
import Runner from './components/Runner/Runner';
import './App.css';
import MemoryHeap from './components/MemoryGame/MemoryHeap';

const App = () => {
  return (
    <Routes>
      <Route element={<SquaresContainer />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/leaderboards' element={<LeaderboardPage />} />
        <Route path='/games' element={<GamesPage />} />
      </Route>
      <Route path='/debugger' element={<Debugger />} />
      <Route path='/orcoftherings' element={<Runner />} />
      <Route path='/memoryheap' element={<MemoryHeap />} />
    </Routes>
  );
};

export default App;
