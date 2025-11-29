import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import classNames from 'classnames';
import './Nav.css';

type NavProps = {
  theme?: string;
  hidden?: boolean;
};

const Nav = ({ theme = 'default', hidden }: NavProps) => {
  const [toggleNav, setToggleNav] = useState(false);

  const navClasses = classNames({
    nav: true,
    hidden: toggleNav,
    [theme]: theme
  });

  return (
    <nav className={navClasses}>
      {hidden && (
        <button id='navToggle' onClick={() => setToggleNav(!toggleNav)}>
          {toggleNav ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      )}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/leaderboards'>Leaderboards</NavLink>
      <NavLink to='/games'>Games</NavLink>
    </nav>
  );
};

export default Nav;
