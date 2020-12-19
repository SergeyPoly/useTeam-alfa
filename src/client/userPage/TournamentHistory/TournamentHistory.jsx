import React from 'react';
import PropTypes from 'prop-types';

import styles from './TournamentHistory.module.scss';
import Button from '../../../shared/components/Button';

const TournamentHistory = props => {
  const { tournaments } = props;

  const tournamentElements = tournaments.map(
    ({ name, date, mode, role, result }) => (
      <tr className={styles.tournamentItem}>
        <td>{name}</td>
        <td>{date}</td>
        <td>{mode}</td>
        <td>{role}</td>
        <td>{result}</td>
      </tr>
    ),
  );
  return (
      <div className={styles.container}>
        <div className={styles.tournaments}>
          <table className={styles.container}>
            <tr className={styles.title}>
              <th>TOURNAMENT</th>
              <th>DATE</th>
              <th>MODE</th>
              <th>ROLE</th>
              <th>RESULT</th>
            </tr>
            {tournamentElements}
          </table>
        </div>
          <div className={styles.buttonContainer}>
              <Button classType='outline' text="Load More" additionalClass={styles.loadMore}/>
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
