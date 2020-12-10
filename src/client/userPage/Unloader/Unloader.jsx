import React from 'react';
import { ReactComponent as DefaultUser } from '../../../assets/images/userProfile/unloader.svg';

import styles from './Unloader.module.scss';

const Unloader = () => {
  return (
    <div className={styles.unloader}>
      <DefaultUser />
    </div>
  );
};

export default Unloader;
