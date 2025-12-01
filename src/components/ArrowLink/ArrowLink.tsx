import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '@nsmr/pixelart-react';
import './ArrowLink.css';

type ArrowLinkProps = {
  to: string;
  children: ReactNode;
};

const ArrowLink = ({ to, children }: ArrowLinkProps) => {
  return (
    <Link to={to} className='arrowLink'>
      {children} <ArrowRight />
    </Link>
  );
};

export default ArrowLink;
