import type { ReactNode } from 'react';
import './Heading.css';

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <h1 className='heading'>{children}</h1>;
};

export default Heading;
