import type { ReactNode } from 'react';
import './Loading.css';

type LoadingProps = {
  children: ReactNode;
};

const Loading = ({ children }: LoadingProps) => {
  return (
    <div className='loading'>
      <span className='loader'>
        <div className='loader__bar'></div>
      </span>
      {children}
    </div>
  );
};

export default Loading;
