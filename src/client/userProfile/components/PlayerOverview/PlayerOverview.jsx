import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import styles from './PlayerOverview.module.scss';
import userAvatar from '../../../../assets/images/userProfile/userAvatar-2x.jpg';
import Unloader from '../Unloader';

const PlayerOverview = props => {
  const { playerName, playerItems } = props;

  const playerItemsElem = playerItems.map(({ title: itemTitle, value }) => (
    <div className={styles.playerTextItem} key={itemTitle}>
      <span>{itemTitle}</span>
      <span>{value}</span>
    </div>
  ));

  return useMemo(
    () => (
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
          EDIT PROFILE
        </button>
      </div>
    ),
    [playerName, playerItemsElem],
  );
};

export default PlayerOverview;

PlayerOverview.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

PlayerOverview.defaultProps = {
  playerItems: [],
};
