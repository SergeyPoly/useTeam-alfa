import React from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import styles from './TeamUserProfil.module.scss';
import teamAvatar from '../../../assets/images/userProfile/team-avatar.jpg';
import { ReactComponent as ChargeIco } from '../../../assets/images/userProfile/ico/charge.svg';

import Unloader from '../Unloader';

const TeamUserProfile = props => {
  const { name, charge, date, invites, team } = props;

  if (!team) {
    return (
      <div className={styles.team}>
        <div className={styles.wrapper}>
          <div className={styles.noTeamAvatar} />
        </div>
        <div className={styles.wrapper}>
          <span className={styles.name}>No team yet</span>
          <span className={styles.date}>{`Invites to team - ${invites}`}</span>

          <button type="button" className={styles.checkInvites}>
            CHECK INVITES
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.team} ${styles.connected}`}>
      <div className={styles.wrapper}>
        <Img
          className={styles.teamAvatar}
          src={teamAvatar}
          alt={name}
          unloader={<Unloader avatar />}
        />
        <div className={styles.charge}>
          <ChargeIco />
          <span>{charge}</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{`From ${date}`}</span>

        <button type="button" className={styles.leaveTeam}>
          LEAVE TEAM
        </button>
      </div>
    </div>
  );
};

export default TeamUserProfile;

TeamUserProfile.propTypes = {
  name: PropTypes.string,
  charge: PropTypes.string,
  date: PropTypes.string,
  invites: PropTypes.string,
  team: PropTypes.bool,
};

TeamUserProfile.defaultProps = {
  name: '',
  charge: '',
  date: '',
  invites: '',
  team: false,
};
