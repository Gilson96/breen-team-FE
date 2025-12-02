import { motion } from 'motion/react';
import type { CardProps } from '../../types';

const Card = ({ card, playGame, handleFlip, disabled, cardBack, flipped }: CardProps) => {
  const handleCardFlip = () => {
    if (!disabled) {
      handleFlip!(card!);
    }
  };

  return flipped ? (
    <motion.button
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: `url(${card?.src})` }}
      className='card-front'
      disabled={playGame ? false : true}
    ></motion.button>
  ) : (
    <motion.button
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 1 }}
      className='card-back'
      onClick={handleCardFlip}
      disabled={playGame ? false : true}
    ></motion.button>
  );
};

export default Card;
