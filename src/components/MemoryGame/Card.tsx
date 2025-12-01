import type { CardProps } from '../../types';

const Card = ({ card, handleFlip, disabled, cardBack, flipped }: CardProps) => {
  const handleCardFlip = () => {
    if (!disabled) {
      handleFlip!(card!);
    }
  };

  return (
    <div className='card'>
      {flipped ? (
        <img src={card?.src} className='card-front' alt='card front' />
      ) : (
        <img className='card-back' src={cardBack} onClick={handleCardFlip} alt='card back' />
      )}
    </div>
  );
};

export default Card;
