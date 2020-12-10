import React from 'react';
import { Img } from 'react-image';
import PropTypes from 'prop-types';

import styles from './UserProfile.module.scss';
import Unloader from '../Unloader';

const UserProfile = props => {
  const { title, overview, player } = props;
  const { playerName, playerItems, editProfileButton } = player;

  const playerItemsElem = playerItems.map(({ itemTitle, value }) => (
    <div className={styles.playerTextItem}>
      <span>{itemTitle}</span>
      <span>{value}</span>
    </div>
  ));

  return (
    <section className={styles.userProfile}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.overview}>{overview}</p>

      <div className={styles.playerContainer}>
        <Img src="" alt={`It's user ${playerName}`} unloader={<Unloader />} />
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
    </section>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  player: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ),
};

UserProfile.defaultProps = {
  title: 'Profile',
  overview: 'Overview',
  player: {},
};
