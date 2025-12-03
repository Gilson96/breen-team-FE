import { useEffect, useState } from 'react';
import type { CardProps } from '../../types';
import { cards } from './cards';
import { arrayShuffle } from 'array-shuffle';
import Card from './Card';
import './MemoryHeap.css';
import { useInterval } from 'usehooks-ts';
import Modal from '../Modal/Modal';
import ScoreSubmitForm from '../ScoreSubmitForm/ScoreSubmitForm';
import Nav from '../Nav/Nav';
import { Clock } from '@nsmr/pixelart-react';

const MemoryHeap = () => {
  const [deck, setDeck] = useState<CardProps[]>(cards);
  const [restartGame, setRestartGame] = useState(false);
  const [firstFlip, setFirstFlip] = useState<CardProps | null>(null);
  const [secondFlip, setSecondFlip] = useState<CardProps | null>(null);
  const [timer, setTimer] = useState(0);
  const [delay] = useState<number>(200);
  const [playGame, setPlayGame] = useState(false);
  const [showScoreSubmit, setShowScoreSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [flipCount, setFlipCount] = useState(25);
  const [gameOver, setGameOver] = useState(false);

  const game = () => {
    const shuffleCards = arrayShuffle(cards);
    setDeck(shuffleCards);
  };

  const resetValues = () => {
    setFirstFlip(null);
    setSecondFlip(null);
    setDisabled(false);
  };

  const handleFlip = (card: CardProps) => {
    if (firstFlip !== null) {
      setSecondFlip(card);
      setFlipCount(prev => prev - 1);
    } else {
      setFirstFlip(card);
      setFlipCount(prev => prev - 1);
    }
  };

  useInterval(
    () => {
      setTimer(timer + 1);
    },
    playGame ? delay : null
  );

  useEffect(() => {
    resetValues();
    game();
    setRestartGame(false);
    setTimer(0);
    setFlipCount(25);
    setGameOver(false);
  }, [restartGame]);

  useEffect(() => {
    let flipCardBack: number;

    if (deck.every(card => card.matched === true)) {
      resetValues();
      game();
      setPlayGame(false);
      setShowScoreSubmit(true);
    }

    if (firstFlip !== null && secondFlip !== null) {
      setDisabled(true);
      if (firstFlip?.src === secondFlip?.src) {
        setDeck(prev => {
          return prev.map(card => {
            if (card.src === firstFlip?.src) {
              return {
                ...card,
                matched: true
              };
            } else {
              return card;
            }
          });
        });
        resetValues();
      } else {
        flipCardBack = setTimeout(() => resetValues(), 1000);
      }
    }

    return () => clearTimeout(flipCardBack);
  }, [firstFlip, secondFlip]);

  const displayContent = () => {
    if (flipCount === 0) {
      setGameOver(true);
      setPlayGame(false);
      resetValues();
      return (
        <Modal
          onClose={() => {
            setShowScoreSubmit(false), setPlayGame(false);
          }}
        >
          <h2>Submit your score!</h2>
          <h3>Finished in {timer} seconds!</h3>
          <ScoreSubmitForm gameId={3} score={timer} />
        </Modal>
      );
    } else if (showScoreSubmit) {
      return (
        <Modal onClose={() => setShowScoreSubmit(false)}>
          <h2>Submit your score!</h2>
          <h3>Finished in {timer} seconds!</h3>
          <ScoreSubmitForm gameId={3} score={timer} />
        </Modal>
      );
    } else {
      return deck.map(card => (
        <Card
          card={card}
          handleFlip={handleFlip}
          disabled={disabled}
          playGame={playGame}
          flipped={card === firstFlip || card === secondFlip || card.matched}
        />
      ));
    }
  };

  return (
    <>
      <main className='game-container'>
        <div className='game-header'>
          <h1 className='game-title'>Memory heap</h1>
          <p className='game-instructions'>Press play game to start</p>
          <div className='game-options'>
            <div className='game-button'>
              <button
                disabled={flipCount === 0 ? true : false}
                className='game-button-play'
                onClick={() => {
                  setPlayGame(true);
                }}
              >
                Play
              </button>
              <button
                className='game-button-restart'
                onClick={() => {
                  setRestartGame(true);
                  setPlayGame(true);
                }}
              >
                Restart
              </button>
            </div>
            <div className='game-score'>
              <span className='game-timer'>
                <p className='timer'>{flipCount}</p>
                <p>flips</p>
              </span>
              <span className='game-timer'>
                <p className='timer'>{timer}</p>
                <Clock />
              </span>
            </div>
          </div>
        </div>
        {gameOver ? (
          <div className='game-over-container'>
            <p>You out of flips</p>
            <p>Press restart game</p>
          </div>
        ) : (
          <div className='card-container'>{displayContent()}</div>
        )}
        <div className='nav-bar'>
          <Nav theme='memoryHeap' hidden />
        </div>
      </main>
    </>
  );
};

export default MemoryHeap;
