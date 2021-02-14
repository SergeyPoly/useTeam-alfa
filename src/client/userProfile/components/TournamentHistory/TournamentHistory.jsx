import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './TournamentHistory.module.scss';
import Button from '../../../../shared/components/Button';

const TournamentHistory = props => {
  const { tournaments } = props;

  const tournamentElements = tournaments.map(
    ({ name, date, mode, role, result }, number) => (
      <tr className={styles.tournamentItem} key={`${name}${date}${number}`}>
        <td>{name}</td>
        <td>{date}</td>
        <td>{mode}</td>
        <td>{role}</td>
        <td>{result}</td>
      </tr>
    ),
  );
  return useMemo(
    () => (
      <div className={styles.container}>
        <table className={styles.tournaments}>
          <tbody className={styles.container}>
            <tr className={styles.title}>
              <th>TOURNAMENT</th>
              <th>DATE</th>
              <th>MODE</th>
              <th>ROLE</th>
              <th>RESULT</th>
            </tr>
            {tournamentElements}
          </tbody>
        </table>
        <div className={styles.buttonContainer}>
          <Button
            classType="outline"
            text="Load More"
            additionalClass={styles.loadMore}
            handleClick={() => console.log('LOAD MORE')}
          />
        </div>
      </div>
    ),
    [tournamentElements],
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
