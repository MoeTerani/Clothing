import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>

        <Link to='/contact' className='option'>
          CONATCT
        </Link>
        <Link to='/signin' className='option'>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
