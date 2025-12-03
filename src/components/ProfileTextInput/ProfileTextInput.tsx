import { useState, useEffect, type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import './ProfileTextInput.css';

type ProfileTextInputProps = {
  initialValue: string;
  setState: Dispatch<SetStateAction<string>>;
};

const ProfileTextInput = ({ initialValue, setState }: ProfileTextInputProps) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue, setState]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setState(e.target.value);
  };

  return <input type='text' value={text} onChange={handleChange} />;
};

export default ProfileTextInput;
