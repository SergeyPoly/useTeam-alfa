import React from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import styles from './TeamUserProfil.module.scss';
import teamAvatar from '../../../../../assets/images/userProfile/team-avatar.jpg';
import { ReactComponent as ChargeIco } from '../../../../../assets/images/userProfile/ico/charge.svg';
import Button from '../../../../../shared/components/Button';

import Unloader from '../Unloader';

const TeamUserProfile = props => {
  const { team, teamProps, openPopup, openChoosePopup } = props;
  const { name, charge, date, invites } = teamProps;

  if (team) {
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

          <button type="button" className={styles.leaveTeam} onClick={openPopup}>
            LEAVE TEAM
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.team}>
      <div className={styles.wrapper}>
        <div className={styles.noTeamAvatar} />
      </div>
      <div className={styles.wrapper}>
        <span className={styles.name}>No team yet</span>
        <span className={styles.date}>{`Invites to team - ${invites}`}</span>
        <Button
          classType="basic"
          handleClick={openChoosePopup}
          text="CHECK INVITES"
          additionalClass={styles.checkInvites}
        />
      </div>
    </div>
  );
};

export default TeamUserProfile;

TeamUserProfile.propTypes = {
  team: PropTypes.bool,
  teamProps: PropTypes.objectOf(PropTypes.string),
    openPopup: PropTypes.func,
    openChoosePopup: PropTypes.func,
};

TeamUserProfile.defaultProps = {
  team: false,
  teamProps: {},
    openPopup: () => {},
    openChoosePopup: () => {},
};
