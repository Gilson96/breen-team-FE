import Button from '../Button/Button';
import './ScoreSubmitForm.css';

const ScoreSubmitForm = () => {
  return (
    <form id='scoreSubmit' action=''>
      <label htmlFor='username'>Enter your name</label>
      <input type='text' name='username' id='username' maxLength={3} />
      <Button>Submit Score</Button>
    </form>
  );
};

export default ScoreSubmitForm;
