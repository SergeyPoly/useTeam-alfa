import React from 'react';
import { Img } from 'react-image';
import styles from './PlayerOverview.module.scss';
import userAvatar from '../../../assets/images/userProfile/userAvatar-2x.jpg';
import Unloader from '../Unloader';

const PlayerOverview = props => {
  const { playerName, playerItems, editProfileButton } = props;

  const playerItemsElem = playerItems.map(({ title: itemTitle, value }) => (
    <div className={styles.playerTextItem}>
      <span>{itemTitle}</span>
      <span>{value}</span>
    </div>
  ));

  return (
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
  );
};

export default PlayerOverview;
