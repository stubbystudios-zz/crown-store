import React from 'react';
import { HomepageContainer } from './Homepage.styles';
import Directory from '../../components/Directory/Directory';

const Homepage = ({ history }) => {
  return (
    <HomepageContainer className="container">
      <Directory history={history} />
    </HomepageContainer>
  )
};

export default Homepage;