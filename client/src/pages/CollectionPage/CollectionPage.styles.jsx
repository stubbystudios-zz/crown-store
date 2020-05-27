import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: block;
`;

export const CollectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
`;

export const CollectionItemsContainer = styled.div`
  & > div {
    margin-bottom: 30px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (min-width: 762px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    & > div {
      margin-bottom: 30px;
    }
  }
`;
