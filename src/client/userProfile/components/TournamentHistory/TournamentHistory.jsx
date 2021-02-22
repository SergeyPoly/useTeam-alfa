import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';
import styles from './TournamentHistory.module.scss';
import Button from '../../../../shared/components/Button';

const TournamentHistory = props => {
  const { tournaments } = props;
  const [tournamentsState, setTournamentsState] = useState([...tournaments]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTournamentsState(state => [...state, ...tournaments]);
      setIsLoading(false);
    }, 1000);
  };

  const tournamentElements = tournamentsState.map(
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

  const button = isLoading ? (
    <Loader
      type="TailSpin"
      color="#567EF7"
      height={25}
      width={25}
      timeout={1000}
    />
  ) : (
    <Button
      classType="outline"
      text="Load More"
      additionalClass={styles.loadMore}
      handleClick={loadMore}
    />
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
        <div className={styles.buttonContainer}>{button}</div>
      </div>
    ),
    [button, tournamentElements],
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
