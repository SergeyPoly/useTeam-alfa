import React, { useState } from 'react';
import { Img } from 'react-image';
import PropTypes from 'prop-types';

import styles from './UserProfile.module.scss';
import Unloader from '../Unloader';
import { ReactComponent as ChargeIco } from '../../../assets/images/userProfile/ico/charge.svg';
import userAvatar from '../../../assets/images/userProfile/userAvatar-2x.jpg';
import steamIcon from '../../../assets/images/userProfile/steam.jpg';
import TeamUserProfile from '../TeamUserProfile';
import TournamentHistory from '../TournamentHistory';

const teamProps = {
  name: 'JabbasTeam 2',
  date: 'Nov 3, 2020 13:47',
  charge: 5,
  invites: 6,
};

const UserProfile = props => {
  const { player, balance } = props;
  const { playerName, playerItems, editProfileButton } = player;

  const [steamConnection, setSteamConnection] = useState(false);
  const [team, setTeam] = useState(false);

  const steamElem = steamConnection ? (
    <div className={`${styles.steamContainer} ${styles.connected}`}>
      <img src={steamIcon} alt="Steam connection" />
      <span className={styles.steamStatus}>Steam account connected</span>
    </div>
  ) : (
    <div className={styles.steamContainer}>
      <img src={steamIcon} alt="Steam connection" />
      <span className={styles.steamStatus}>Not connected</span>
    </div>
  );

  const playerItemsElem = playerItems.map(({ title: itemTitle, value }) => (
    <div className={styles.playerTextItem}>
      <span>{itemTitle}</span>
      <span>{value}</span>
    </div>
  ));

  return (
    <section className={styles.userProfile}>
      <h2 className={styles.title}>Profile</h2>
      <p className={styles.overview}>Overview</p>

      <div className={styles.playerContainer}>
        <Img
          src={userAvatar}
          alt={`It's user ${playerName}`}
          unloader={<Unloader />}
        />
        <div className={styles.playerTextWrapper}>
          <div>
            <span className={styles.playerName}>{playerName}</span>
          </div>
          <div>{playerItemsElem}</div>
        </div>
        <button type="button" className={styles.editProfileButton}>
          {editProfileButton}
        </button>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.overview}>Steam connection</p>
        {steamElem}
        <button
          type="button"
          className={styles.testButton}
          // eslint-disable-next-line
          onClick={() => setSteamConnection(state => !state)}>
          Try to change connection
        </button>
      </div>

      <p className={styles.overview}>Balance</p>
      <div className={styles.balanceContainer}>
        <div className={styles.balanceItem}>
          <ChargeIco />
          <span>{balance.charge}</span>
          <button type="button">RECHARGE</button>
        </div>
        <div className={styles.balanceItem}>
          <span>{`$${balance.money}`}</span>
          <button type="button">WITHDRAW</button>
        </div>
      </div>

      <p className={styles.overview}>Team</p>
      <div className={styles.wrapper}>
        <div className={styles.teamContainer}>
          <TeamUserProfile
            name={teamProps.name}
            date={teamProps.date}
            charge={teamProps.charge}
            invites={teamProps.invites}
            team={team}
          />
        </div>
        <button
          type="button"
          className={styles.testButton}
          // eslint-disable-next-line
          onClick={() => setTeam(state => !state)}>
          Try to change team status
        </button>
      </div>

      <p className={styles.overview}>Tournament History</p>
      <TournamentHistory />
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
};

UserProfile.defaultProps = {
  player: {},
  balance: {},
};
