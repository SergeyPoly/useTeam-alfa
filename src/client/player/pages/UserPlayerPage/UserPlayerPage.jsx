import React from 'react';
import PropTypes from 'prop-types';

import './UserPlayerPage.scss';

const UserPlayerPage = ({ children }) => {
  const currentUserName = 'Not Enot';
  const description = 'Player Page';

  return (
    <div className="user-player-page">
      <h2 className="user-player-page__user-name">{currentUserName}</h2>
      <p className="user-player-page__page-description">{description}</p>
      {children}
    </div>
  );
};

export default UserPlayerPage;

UserPlayerPage.propTypes = {
  children: PropTypes.element,
};

UserPlayerPage.defaultProps = {
  children: null,
};
