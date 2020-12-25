import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ShowPasswordIco } from '../../../../assets/images/editUser/show-password.svg';
import { ReactComponent as HidePasswordIco } from '../../../../assets/images/editUser/hide-password.svg';
import styles from './ShowPassword.module.scss';

const ShowPassword = props => {
  const { type, setType } = props;

  const handleClick = () => {
    setType(state => {
      if (state === 'password') {
        return 'text';
      }
      return 'password';
    });
  };

  const icon =
    type === 'password' ? (
      <ShowPasswordIco onClick={handleClick} />
    ) : (
      <HidePasswordIco onClick={handleClick} />
    );

  return <div className={styles.showPassword}>{icon}</div>;
};

export default ShowPassword;

ShowPassword.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};
