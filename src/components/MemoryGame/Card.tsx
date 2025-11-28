import type { CardProps } from '../../types';

const Card = ({ card, handleFlip, disabled, cardBack, flipped }: CardProps) => {
  const handleCardFlip = () => {
    if (!disabled) {
      handleFlip!(card!);
    }
  };

  return (
    <div>
      {flipped ? (
        <img src={card?.src} alt='card front' />
      ) : (
        <img src={cardBack} onClick={handleCardFlip} alt='card back' />
      )}
    </div>
  );
};

export default Card;
