import { useState, useEffect, type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import './ProfileTextInput.css';

type ProfileTextInputProps = {
  initialValue: string;
  setState: Dispatch<SetStateAction<string>>;
  onBlur: () => void;
};

const ProfileTextInput = ({ initialValue, setState, onBlur }: ProfileTextInputProps) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue, setState]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setState(e.target.value);
  };

  return (
    <input
      type='text'
      value={text}
      onChange={handleChange}
      onBlur={onBlur}
      autoFocus
      className='profileTextInput'
      maxLength={15}
    />
  );
};

export default ProfileTextInput;
