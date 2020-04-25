import React from 'react';
import './Homepage.scss';
import Directory from '../../components/Directory/Directory';

const Homepage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  )
};

export default Homepage;