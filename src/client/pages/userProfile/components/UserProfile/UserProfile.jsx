import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popup from 'reactjs-popup';
import { Input } from 'antd';
import styles from './UserProfile.module.scss';
import 'reactjs-popup/dist/index.css';
import TeamUserProfile from '../TeamUserProfile';
import TournamentHistory from '../TournamentHistory';
import PlayerOverview from '../PlayerOverview';
import SteamConnection from '../SteamConnection';
import Balance from '../Balance';
import EditUser from '../../editUser/components/editUser';
import Button from '../../../../../shared/components/Button';
import Invites from '../Invites/Invites';

const UserProfile = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  const [isOpenChooseTeam, setIsOpenChooseTeam] = useState(false);
  const [isTeam, setIsTeam] = useState(true);
  const [playerName, setPlayerName] = useState('Player 1');

  const { player, balance, tournaments, team, invites } = props;
  const { playerItems } = player;
  const { charge, money } = balance;

  const contentStyle = {
    background: 'none',
    width: 'unset',
    border: 'unset',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '95vh',
    borderRadius: '15px',
  };

  const leaveTeam = () => {
    setIsTeam(false);
    setIsOpenTeam(false);
  };

  return (
    <section className={styles.userProfile}>
      <h2 className={styles.title}>Profile</h2>

      <p className={styles.subTitle}>Overview</p>
      <PlayerOverview
        playerName={playerName}
        playerItems={playerItems}
        editPlayer={() => setIsOpen(true)}
      />

      <p className={styles.subTitle}>Steam connection</p>
      <SteamConnection />

      <p className={styles.subTitle}>Balance</p>
      <Balance charge={charge} money={money} />

      <p className={styles.subTitle}>Team</p>
      <TeamUserProfile
        team={isTeam}
        openPopup={() => setIsOpenTeam(true)}
        openChoosePopup={() => setIsOpenChooseTeam(true)}
        teamProps={team}
      />

      <p className={styles.subTitle}>Tournament History</p>
      <TournamentHistory tournaments={tournaments} />

      <Popup
        open={isOpen}
        closeOnDocumentClick
        onClose={() => setIsOpen(false)}
        modal
        lockScroll
        {...{ contentStyle }}>
        <Button
          text="X"
          classType="basic"
          handleClick={() => setIsOpen(false)}
          additionalClass={styles.popupClose}
        />
        <EditUser
          playerName={playerName}
          setPlayerName={setPlayerName}
          setIsOpenPopup={setIsOpen}
        />
      </Popup>

      <Popup
        open={isOpenTeam}
        closeOnDocumentClick
        onClose={() => setIsOpenTeam(false)}
        modal
        lockScroll
        {...{ contentStyle }}>
        <Button
          text="X"
          classType="basic"
          handleClick={() => setIsOpenTeam(false)}
          additionalClass={styles.popupClose}
        />
        <div className={styles.leaveTeamPopup}>
          <h3>Do you really want to leave team?</h3>
          <div>
            <Button
              text="No"
              classType="basic"
              handleClick={() => setIsOpenTeam(false)}
            />
            <Button text="Yes" classType="basic" handleClick={leaveTeam} />
          </div>
        </div>
      </Popup>

      <Popup
        open={isOpenChooseTeam}
        closeOnDocumentClick
        onClose={() => setIsOpenChooseTeam(false)}
        modal
        lockScroll
        {...{ contentStyle }}>
        <Button
          text="X"
          classType="basic"
          handleClick={() => setIsOpenChooseTeam(false)}
          additionalClass={styles.popupClose}
        />
        <Invites
          invites={invites}
          setPopup={setIsOpenChooseTeam}
          setTeam={setIsTeam}
        />
      </Popup>
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
  invites: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  team: PropTypes.objectOf(PropTypes.string),
};

UserProfile.defaultProps = {
  player: {},
  balance: {},
  tournaments: [],
  invites: [],
  team: {},
};
