import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ id, title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <li
      id={id}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h2>{title}</h2>
        <span>Shop now</span>
      </div>
    </li>
  )
};

export default withRouter(MenuItem);