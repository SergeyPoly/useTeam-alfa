import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './TournamentsItem.module.scss';

const TournamentItem = props => {
  const { avatar, name, type, status } = props;

  return useMemo(
    () => (
      <div className={styles.tournamentItem}>
          <img src={avatar} alt={`${name}s avatar`} className={styles.tournamentItem__avatar}/>
        <div className={styles.tournamentItem__info}>
            <div className={styles.tournamentItem__text}>
                <span>{name}</span>
                <span>{type}</span>
            </div>
            <span className={styles.tournamentItem__status}>{status}</span>
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
