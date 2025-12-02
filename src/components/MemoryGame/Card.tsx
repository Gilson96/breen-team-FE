import { motion } from 'motion/react';
import type { CardProps } from '../../types';

const Card = ({ card, handleFlip, disabled, cardBack, flipped }: CardProps) => {
  const handleCardFlip = () => {
    if (!disabled) {
      handleFlip!(card!);
    }
  };

  return flipped ? (
    <motion.div
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: `url(${card?.src})` }}
      className='card-front'
    ></motion.div>
  ) : (
    <motion.div
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 1 }}
      className='card-back'
      onClick={handleCardFlip}
    ></motion.div>
  );
};

export default Card;
