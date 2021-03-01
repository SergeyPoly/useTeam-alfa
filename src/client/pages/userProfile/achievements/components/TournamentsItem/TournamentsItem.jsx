import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './TournamentsItem.module.scss';

const TournamentItem = props => {
  const { avatar, name, type, status } = props;

  return useMemo(
    () => (
      <div className={styles.tournamentItem}>
        <div className={styles.firstWrapper}>
          <img src={avatar} alt={`${name}s avatar`} />
          <div className={styles.textWrapper}>
            <span>{name}</span>
            <span>{type}</span>
          </div>
        </div>

        <div className={styles.secondWrapper}>
          <span>{status}</span>
        </div>
      </div>
    ),
    [avatar, name, type, status],
  );
};

export default TournamentItem;

TournamentItem.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.string,
};

TournamentItem.defaultProps = {
  avatar: '',
  name: '',
  type: '',
  status: '',
};
