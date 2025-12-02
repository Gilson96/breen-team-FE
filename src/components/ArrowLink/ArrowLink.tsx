import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '@nsmr/pixelart-react';
import classNames from 'classnames';
import './ArrowLink.css';

type ArrowLinkProps = {
  to: string;
  dark?: boolean;
  children: ReactNode;
};

const ArrowLink = ({ to, dark, children }: ArrowLinkProps) => {
  const linkClasses = classNames({
    arrowLink: true,
    dark
  });

  return (
    <Link to={to} className={linkClasses}>
      {children} <ArrowRight />
    </Link>
  );
};

export default ArrowLink;
