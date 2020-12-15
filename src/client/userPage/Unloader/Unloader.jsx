import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DefaultUser } from '../../../assets/images/userProfile/unloader.svg';

import styles from './Unloader.module.scss';

const Unloader = props => {
  const { team } = props;
  const className = team ? styles.unloaderTeam : styles.unloader;
  return (
    <div className={className}>
      <DefaultUser />
    </div>
  );
};

export default Unloader;

Unloader.propTypes = {
  team: PropTypes.bool,
};

Unloader.defaultProps = {
  team: false,
};
