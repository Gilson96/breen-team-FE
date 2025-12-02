import { useEffect, useState } from 'react';
import type { CardProps } from '../../types';
import { cards } from './cards';
import { arrayShuffle } from 'array-shuffle';
import Card from './Card';
import cardBack from '../../../public/memoryGame/back_card.png';
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
  const [delay, setDelay] = useState<number>(200);
  const [playGame, setPlayGame] = useState(false);
  const [score, setScore] = useState(0);
  const [showScoreSubmit, setShowScoreSubmit] = useState(false);

  const game = () => {
    const shuffleCards = arrayShuffle(cards);
    setDeck(shuffleCards);
  };

  const resetValues = () => {
    setFirstFlip(null);
    setSecondFlip(null);
  };

  const handleFlip = (card: CardProps) => {
    if (firstFlip) {
      setSecondFlip(card);
    } else {
      setFirstFlip(card);
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
  }, [restartGame]);

  useEffect(() => {
    let flipCardBack: number;

    if (deck.every(card => card.matched === true)) {
      setScore(timer);
      resetValues();
      game();
      setPlayGame(false);
      setShowScoreSubmit(true);
      setTimer(0);
    }

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

    return () => clearTimeout(flipCardBack);
  }, [firstFlip, secondFlip]);

  return (
    <main className='game-container'>
      <div className='game-header'>
        <h1 className='game-title'>Memory heap</h1>
        <div className='game-options'>
          <button
            className='game-button'
            onClick={() => {
              setPlayGame(true);
            }}
          >
            Play game
          </button>
          <button
            className='game-button'
            onClick={() => {
              setRestartGame(true);
            }}
          >
            Restart game
          </button>
          <span className='game-timer'>
            <p className='timer'>{timer}</p>
            <Clock />
          </span>
        </div>
      </div>
      <div className='card-container'>
        {showScoreSubmit ? (
          <Modal onClose={() => setShowScoreSubmit(false)}>
            <h2>Submit your score!</h2>
            <h3>Finished in {score} seconds!</h3>
            <ScoreSubmitForm gameId={3} score={score} />
          </Modal>
        ) : (
          deck.map(card => (
            <Card
              card={card}
              handleFlip={handleFlip}
              cardBack={cardBack}
              playGame={playGame}
              flipped={card === firstFlip || card === secondFlip || card.matched}
            />
          ))
        )}
      </div>
      <div className='nav-bar'>
        <Nav />
      </div>
    </main>
  );
};

export default MemoryHeap;
