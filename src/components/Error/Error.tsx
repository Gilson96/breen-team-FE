import type { ReactNode } from 'react';
import ArrowLink from '../ArrowLink/ArrowLink';
import './Error.css';

type ErrorProps = {
  children: ReactNode;
};

const Error = ({ children }: ErrorProps) => {
  return (
    <div className='error'>
      {children}
      <ArrowLink to='/'>Back to Home Page</ArrowLink>
    </div>
  );
};

export default Error;
