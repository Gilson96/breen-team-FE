import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { submitScore } from '../../api';
import Button from '../Button/Button';
import './ScoreSubmitForm.css';

type ScoreSubmitFormProps = {
  gameId: number;
  score: number;
};

const ScoreSubmitForm = ({ gameId, score }: ScoreSubmitFormProps) => {
  const [username, setUsername] = useState('');
  const [validate, setValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { isRefetching, isSuccess, isError, refetch } = useQuery({
    queryKey: ['submitScore'],
    queryFn: async () => submitScore(gameId, username, score),
    refetchOnWindowFocus: false,
    enabled: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.length === 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidate(true);
    if (isValid) refetch();
  };

  return (
    <form id='scoreSubmit' onSubmit={handleSubmit}>
      <label htmlFor='username'>Enter your name</label>
      <input
        type='text'
        name='username'
        id='username'
        value={username}
        onChange={handleChange}
        minLength={3}
        maxLength={3}
      />
      {validate && username.length < 3 && (
        <span className='error'>Username must be 3 characters</span>
      )}
      <Button>{isRefetching ? 'Submitting score' : 'Submit Score'}</Button>
      {isError && <span>Error submitting score</span>}
      {isSuccess && <span>Score submitted!</span>}
    </form>
  );
};

export default ScoreSubmitForm;
