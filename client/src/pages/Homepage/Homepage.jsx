import React from 'react';
import { HomepageContainer } from './Homepage.styles';
import Directory from '../../components/Directory/Directory';

const Homepage = ({ history }) => {
  return (
    <HomepageContainer>
      <Directory history={history} />
    </HomepageContainer>
  )
};

export default Homepage;