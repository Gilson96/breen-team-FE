import { useState, useEffect, type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import './ProfileTextArea.css';

type ProfileTextAreaProps = {
  initialValue: string;
  setState: Dispatch<SetStateAction<string>>;
};

const ProfileTextArea = ({ initialValue, setState }: ProfileTextAreaProps) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue, setState]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setState(e.target.value);
  };

  return <textarea value={text} onChange={handleChange} />;
};

export default ProfileTextArea;
