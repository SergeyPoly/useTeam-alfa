import React from 'react';
import PropTypes from 'prop-types';

import styles from './Achievements.module.scss';
import TournamentItem from '../TournamentsItem';
import NoTournamentsItem from '../NoTournamentsItem';
import Heading from '../../../../../shared/components/Heading';
import { useSelector } from 'react-redux';

const Achievements = () => {

  const user = useSelector(state => state.auth.user);
  const achievementsElements =
      user.achievements && user.achievements.length !== 0 ? (
      user.achievements.map(({ avatar, title, mode, result, id, team}) => {
          if (team === user.team.id) {result = "Team win" }
          else result = "Winner";
          return(
              <TournamentItem
              avatar={avatar}
              title={title}
              status={result}
              mode={mode}
              key={id}
          />)
      })) : (
      <NoTournamentsItem />
    );

  return (
    <section className={styles.achievements}>
      <Heading type={"block"} text={"Tournaments won"}/>
      <div>
        {achievementsElements}
      </div>
    </section>
  );
};

export default Achievements;
;
