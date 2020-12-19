import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserProfile.module.scss';
import TeamUserProfile from '../TeamUserProfile';
import TournamentHistory from '../TournamentHistory';
import PlayerOverview from '../PlayerOverview';
import SteamConnection from '../SteamConnection';
import Balance from '../Balance';

const UserProfile = props => {
  const { player, balance, tournaments, team } = props;
  const { playerName, playerItems } = player;
  const { charge, money } = balance;

  return (
    <section className={styles.userProfile}>
      <h2 className={styles.title}>Profile</h2>

      <p className={styles.subTitle}>Overview</p>
      <PlayerOverview playerName={playerName} playerItems={playerItems} />

      <p className={styles.subTitle}>Steam connection</p>
      <SteamConnection />

      <p className={styles.subTitle}>Balance</p>
      <Balance charge={charge} money={money} />

      <p className={styles.subTitle}>Team</p>
      <TeamUserProfile team teamProps={team} />

      <p className={styles.subTitle}>Tournament History</p>
      <TournamentHistory tournaments={tournaments} />
    </section>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  player: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ),

  balance: PropTypes.objectOf(PropTypes.string),
  tournaments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),

  team: PropTypes.objectOf(PropTypes.string),
};

UserProfile.defaultProps = {
  player: {},
  balance: {},
  tournaments: [],
  team: {},
};
