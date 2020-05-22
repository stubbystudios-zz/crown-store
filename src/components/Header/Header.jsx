import React, { useContext } from 'react';

import { auth } from '../../firebase/firebase.utils';
import { HeaderContainer, LogoContainer, NavContainer, NavLink } from './Header.styles';
import { ReactComponent as Logo } from '../../images/logo.svg';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import CurrentUserContext from '../../contexts/CurrentUser/CurrentUserContext';
import { CartContext } from '../../providers/cart/CartProvider';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoContainer to='/' className='logo-container'>
        <Logo className='logo' />
      </LogoContainer>
      <NavContainer role='navigation' className="nav">
        <NavLink className='nav-item' to='/'>Home</NavLink>
        <NavLink className='nav-item' to='/shop'>Shop</NavLink>
        <NavLink className='nav-item' to='/contact'>Contact</NavLink>
        {currentUser
          ? <NavLink as='div' className='nav-item' onClick={() => auth.signOut()}>Sign out</NavLink>
          : <NavLink className='nav-item' to='/signin'>Sign-in</NavLink>
        }

        <CartIcon />
      </NavContainer>
      {hidden
        ? null
        : <CartDropdown />}
    </HeaderContainer>
  )
};

export default Header;