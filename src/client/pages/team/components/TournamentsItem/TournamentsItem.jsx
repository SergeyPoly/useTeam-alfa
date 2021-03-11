import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './TournamentsItem.module.scss';

const TournamentItem = props => {
  const { avatar, title, mode, status } = props;

  return useMemo(
    () => (
      <div className={styles.tournamentItem}>
          <img src={avatar} alt={`${title}s avatar`} className={styles.tournamentItem__avatar}/>
        <div className={styles.tournamentItem__info}>
            <div className={styles.tournamentItem__text}>
                <span>{title}</span>
                <span>{mode}</span>
            </div>
            <span className={styles.tournamentItem__status}>{status}</span>
        </div>


      </div>
    ),
    [avatar, title, mode, status],
  );
};

export default TournamentItem;

TournamentItem.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.string,
    mode: PropTypes.string,
  status: PropTypes.string,
};

TournamentItem.defaultProps = {
  avatar: '',
    title: '',
    mode: '',
  status: '',
};
