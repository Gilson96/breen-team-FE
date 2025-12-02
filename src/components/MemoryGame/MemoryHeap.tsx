import { useEffect, useState } from 'react';
import type { CardProps } from '../../types';
import { cards } from './cards';
import { arrayShuffle } from 'array-shuffle';
import Card from './Card';
import cardBack from '../../../public/memoryGame/back_card.png';
import './MemoryHeap.css';

const MemoryHeap = () => {
  const [deck, setDeck] = useState<CardProps[]>(cards);
  const [restartGame, setRestartGame] = useState(false);
  const [firstFlip, setFirstFlip] = useState<CardProps | null>(null);
  const [secondFlip, setSecondFlip] = useState<CardProps | null>(null);

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

  useEffect(() => {
    resetValues();
    game();
    setRestartGame(false);
  }, [restartGame]);

  useEffect(() => {
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
      setTimeout(() => resetValues(), 1000);
    }
  }, [secondFlip]);

  return (
    <main className='game-container'>
      <div className='game-header'>
        <h1 className='game-title'>Memory heap</h1>
        <button
          className='game-button'
          onClick={() => {
            setRestartGame(true);
          }}
        >
          Restart game
        </button>
      </div>
      <div className='card-container'>
        {deck.map(card => (
          <Card
            card={card}
            handleFlip={handleFlip}
            cardBack={cardBack}
            flipped={card === firstFlip || card === secondFlip || card.matched}
          />
        ))}
      </div>
    </main>
  );
};

export default MemoryHeap;
