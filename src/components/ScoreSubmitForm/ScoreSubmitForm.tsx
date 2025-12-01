import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { submitScore } from '../../api';
import Button from '../Button/Button';
import './ScoreSubmitForm.css';
import ArrowLink from '../ArrowLink/ArrowLink';

type ScoreSubmitFormProps = {
  gameId: number;
  score: number;
};

const ScoreSubmitForm = ({ gameId, score }: ScoreSubmitFormProps) => {
  const [initials, setInitials] = useState({ first: '', second: '', third: '' });
  const [validate, setValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);

  const { isPending, isError, isSuccess, data, mutate } = useMutation({
    mutationFn: () =>
      submitScore(gameId, `${initials.first}${initials.second}${initials.third}`, score)
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedInitials = { ...initials, [e.target.id]: e.target.value.toUpperCase() };

    setInitials(updatedInitials);
    setIsValid(!Object.values(updatedInitials).includes(''));

    if (e.target.id === 'first' && e.target.value) secondRef.current!.focus();
    if (e.target.id === 'second' && e.target.value) thirdRef.current!.focus();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidate(true);
    if (isValid) mutate();
  };

  if (isSuccess) {
    return (
      <>
        <span>Score submitted!</span>
        <ArrowLink to={`/leaderboards/${data.score.score_id}`}>View Your Score</ArrowLink>
      </>
    );
  }

  return (
    <form id='scoreSubmit' onSubmit={handleSubmit}>
      <label htmlFor='initial1'>Enter your initials</label>
      <fieldset className='initials'>
        <input
          type='text'
          name='first'
          id='first'
          value={initials.first}
          onChange={handleChange}
          minLength={1}
          maxLength={1}
          autoFocus
        />
        <input
          type='text'
          name='second'
          id='second'
          value={initials.second}
          onChange={handleChange}
          minLength={1}
          maxLength={1}
          ref={secondRef}
        />
        <input
          type='text'
          name='third'
          id='third'
          value={initials.third}
          onChange={handleChange}
          minLength={1}
          maxLength={1}
          ref={thirdRef}
        />
      </fieldset>
      {validate && !isValid && <span>Username must be 3 characters</span>}
      {isError && <span>Error submitting score</span>}
      <Button disabled={isPending}>{isPending ? 'Submitting score' : 'Submit Score'}</Button>
    </form>
  );
};

export default ScoreSubmitForm;
