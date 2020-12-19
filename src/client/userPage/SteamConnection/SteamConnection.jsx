import React from 'react';
import PropTypes from 'prop-types';

import styles from './SteamConnection.module.scss';
import steamIcon from '../../../assets/images/userProfile/steam.jpg';

const SteamConnection = props => {
  const { connected } = props;
  const steamElem = connected ? (
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

  return <>{steamElem}</>;
};

export default SteamConnection;

SteamConnection.propTypes = {
  connected: PropTypes.bool,
};

SteamConnection.defaultProps = {
  connected: false,
};
