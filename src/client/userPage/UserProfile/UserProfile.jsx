import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserProfile.module.scss';
import TeamUserProfile from '../TeamUserProfile';
import TournamentHistory from '../TournamentHistory';
import PlayerOverview from '../PlayerOverview';
import SteamConnection from '../SteamConnection';
import Balance from '../Balance';

const teamProps = {
  name: 'JabbasTeam 2',
  date: 'Nov 3, 2020 13:47',
  charge: 5,
  invites: 6,
};

const UserProfile = props => {
  const { player, balance, tournaments } = props;
  const { playerName, playerItems, editProfileButton } = player;
  const { charge, money } = balance;

  return (
    <section className={styles.userProfile}>
      <h2 className={styles.title}>Profile</h2>

      <p className={styles.subTitle}>Overview</p>
      <PlayerOverview
        playerName={playerName}
        playerItems={playerItems}
        editProfileButton={editProfileButton}
      />

      <p className={styles.subTitle}>Steam connection</p>
      <SteamConnection />

      <p className={styles.subTitle}>Balance</p>
      <Balance charge={charge} money={money} />

      <p className={styles.subTitle}>Team</p>
      <TeamUserProfile
        name={teamProps.name}
        date={teamProps.date}
        charge={teamProps.charge}
        invites={teamProps.invites}
        team={teamProps.team}
      />

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
};

UserProfile.defaultProps = {
  player: {},
  balance: {},
  tournaments: [],
};
