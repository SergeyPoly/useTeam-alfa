import React from 'react';
import PropTypes from 'prop-types';

import styles from './TournamentHistory.module.scss';

const TournamentHistory = props => {
  const { tournaments } = props;

  if (!tournaments) {
    // eslint-disable-next-line no-console
    console.log('no tournaments');
  }
  return (
    <div className={styles.container}>
      <div className={styles.tournaments}>
        <div className={styles.title}>
          <span>TOURNAMENT</span>
          <span>DATE</span>
          <span>MODE</span>
          <span>ROLE</span>
          <span>RESULT</span>
        </div>
      </div>
    </div>
  );
};

export default TournamentHistory;

TournamentHistory.propTypes = {
  tournaments: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ),
};

TournamentHistory.defaultProps = {
  tournaments: null,
};
