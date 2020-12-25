import React, { useState } from 'react';

import styles from './EditUser.module.scss';
import EditNameForm from '../EditNameForm';
import EditPasswordForm from '../EditPasswordForm';

const EditUser = () => {
  const [name, setName] = useState('Player 1');
  const [password, setPassword] = useState('Test123');

  return (
    <section className={styles.editUser}>
      <h2 className={styles.title}>Edit profile</h2>
      <EditNameForm name={name} setName={setName} />
      <h2 className={styles.title}>Edit Password</h2>
      <EditPasswordForm password={password} setPassword={setPassword} />
    </section>
  );
};

export default EditUser;
