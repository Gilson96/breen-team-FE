import { useEffect, useState } from 'react';
import type { CardProps } from '../../types';
import { cards } from './cards';
import { arrayShuffle } from 'array-shuffle';
import Card from './Card';
import cardBack from '../../../public/memoryGame/back_card.png';

const Game = () => {
  const [deck, setDeck] = useState<CardProps[]>(cards);
  const [restartGame, setRestartGame] = useState(false);
  const [firstFlip, setFirstFlip] = useState<CardProps | null>(null);
  const [secondFlip, setSecondFlip] = useState<CardProps | null>(null);

  useEffect(() => {
    game();
    setRestartGame(false);
  }, [restartGame]);

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

  if (firstFlip !== null && secondFlip !== null) {
    if (firstFlip?.src === secondFlip?.src) {
      setDeck(prev => {
        return prev.map(card => {
          if (card.src === firstFlip.src) {
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
      setTimeout(() => resetValues(), 400);
    }
  }

  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <div>
        <p>Memory heap</p>
        <button
          onClick={() => {
            setRestartGame(true);
          }}
        ></button>
      </div>
      <div className='grid grid-cols-3'>
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

export default Game;
