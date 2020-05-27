import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const CollectionItemContainer = styled.div`
  align-items: center;
  height: 175px;
  margin-bottom: 30px;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (min-width: 762px) {
    height: 350px;
    margin-bottom: 0;
  }
`;

export const AddButton = styled(CustomButton)`
  display: none;
  left: 10%;
  opacity: 0.7;
  position: absolute;
  top: 100px;
  width: 80%;

  @media screen and (min-width: 762px) {
    top: 255px;
  }
`;

export const BackgroundImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  display: block;
  height: 95%;
  margin-bottom: 5px;
  width: 100%;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  text-align: right;
`;
