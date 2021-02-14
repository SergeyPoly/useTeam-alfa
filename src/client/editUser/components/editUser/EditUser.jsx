import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './EditUser.module.scss';
import EditNameForm from '../EditNameForm';
import EditPasswordForm from '../EditPasswordForm';

const EditUser = ({ playerName, setPlayerName, setIsOpenPopup }) => {
  const [password, setPassword] = useState('Test123');

  return (
    <section className={styles.editUser}>
      <h2 className={styles.title}>Edit profile</h2>
      <EditNameForm
        name={playerName}
        setName={setPlayerName}
        setIsOpenPopup={setIsOpenPopup}
      />
      <h2 className={styles.title}>Edit Password</h2>
      <EditPasswordForm password={password} setPassword={setPassword} />
    </section>
  );
};

export default EditUser;

EditUser.propTypes = {
  playerName: PropTypes.string,
  setPlayerName: PropTypes.func,
  setIsOpenPopup: PropTypes.func,
};

EditUser.defaultProps = {
  playerName: 'Player',
  setPlayerName: () => {},
  setIsOpenPopup: () => {},
};
