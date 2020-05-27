import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  
  @media screen and (min-width: 762px) {
    display: flex;
    height: 70px;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 762px) {
    align-items: center;
    justify-content: flex-start;
    padding-right: 25px;
    width: auto;
  }
`;

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media screen and (min-width: 762px) {
    justify-content: flex-end;
    width: 50%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
