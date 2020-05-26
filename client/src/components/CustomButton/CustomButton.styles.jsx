import styled, { css } from 'styled-components';

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

const buttonStyles = css`
  border: 1px solid transparent;
  background-color: #000;
  color: white;

  &:hover {
    background-color: white;
    color: #000;
    border-color: #000;
  }
`;

const invertedButtonStyles = css`
  background: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background: #000;
    color: #fff;
    border-color: transparent;
  }
`;

export const googleSignInStyles = css`
  background: #4285f4;
  color: #fff;

  &:hover {
    background: #357ae8;
  }
`;

export const CustomButtonContainer = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "Open Sans Condensed";
  font-size: 16px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px;
  text-transform: uppercase;
  width: auto;

  ${getButtonStyles}

  @media screen and (min-width: 762px) {
    padding: 0 35px;
    min-width: 165px;
  }
`;