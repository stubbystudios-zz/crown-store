import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
  return (
    <header className='global-nav'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <nav role='navigation' className="nav">
        <Link className='nav-item' to='/'>Home</Link>
        <Link className='nav-item' to='/shop'>Shop</Link>
        <Link className='nav-item' to='/contact'>Contact</Link>
        {currentUser
          ? <div className='nav-item' onClick={() => auth.signOut()}>Sign out</div>
          : <Link className='nav-item' to='/signin'>Sign-in</Link>
        }
        <CartIcon />
      </nav>
      {hidden
        ? null
        : <CartDropdown />}
    </header>
  )
};

const maptStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(maptStateToProps)(Header);