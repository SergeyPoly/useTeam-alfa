import React from 'react';
import PropTypes from 'prop-types';

import styles from './Achievements.module.scss';
import TournamentItem from '../TournamentsItem';
import NoTournamentsItem from '../NoTournamentsItem';
import Heading from '../../../../shared/components/Heading';

const Achievements = props => {
  const { achievements } = props;

  const achievementsElements =
    achievements && achievements.length !== 0 ? (
      achievements.map(({ avatar, name, type, status, id }) => (
        <TournamentItem
          avatar={avatar}
          name={name}
          status={status}
          type={type}
          key={id}
        />
      ))
    ) : (
      <NoTournamentsItem />
    );
  return (
    <section className={styles.achivements}>
      <Heading type={"block"} text={"Tournaments won"}/>
      <div className={styles.container}>
        <p className={styles.subTitle}>Tournaments won</p>
        {achievementsElements}
      </div>
    </section>
  );
};

export default Achievements;

// Achievements.propTypes = {
//   achievements: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//     ),
//   ),
// };
//
// Achievements.defaultProps = {
//   achievements: [],
// };
