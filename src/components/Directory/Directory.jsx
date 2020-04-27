import React from 'react';
import './Directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) => (
  <ul className="directory-menu" >
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </ul>
)

export const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(
  mapStateToProps
)(Directory);