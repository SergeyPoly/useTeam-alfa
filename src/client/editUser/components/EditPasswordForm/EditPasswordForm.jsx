import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import styles from './EditPassword.module.scss';
import validationSchema from './validationSchema';
import Error from '../Error/Error';
import Button from '../../../../shared/components/Button';
import initialValues from './initialValues';
import editPasswordProps from './editPasswordProps';
import ShowPassword from '../ShowPassword';

const EditPasswordForm = props => {
  const { password, setPassword } = props;
  const [oldType, setOldType] = useState('password');
  const [newType, setNewType] = useState('password');
  const [newRepeatType, setNewRepeaType] = useState('password');

  const { oldPassword, newPassword, newPasswordRepeat } = editPasswordProps;

  const onSubmit = (values, { resetForm }) => {
      const { oldPassword, newPassword, newPasswordRepeat } = values;
    if (oldPassword !== password) {
      alert('Incorrect password, please try again');
    } else if (newPassword !== newPasswordRepeat) {
      alert("New passwords don't match");
    } else {
      setPassword(newPassword);
      alert(`Success, your new password is ${newPassword}`);
        resetForm(initialValues);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div className={styles.formControl}>
          <label htmlFor={oldPassword.id}>Current</label>
          <div className={styles.wrapper}>
            <Field
              name={oldPassword.name}
              id={oldPassword.id}
              placeholder={oldPassword.placeholder}
              type={oldType}
              autoComplete="off"
            />
            <ShowPassword type={oldType} setType={setOldType} />
          </div>
          <ErrorMessage name={oldPassword.name} component={Error} />
        </div>
        <div className={styles.formControl}>
          <label htmlFor={newPassword.id}>New Password</label>
          <div className={styles.wrapper}>
            <Field
              name={newPassword.name}
              id={newPassword.id}
              placeholder={newPassword.placeholder}
              type={newType}
              autoComplete="off"
            />
            <ShowPassword type={newType} setType={setNewType} />
          </div>
          <ErrorMessage name={newPassword.name} component={Error} />
        </div>
        <div className={styles.formControl}>
          <div className={styles.wrapper}>
            <Field
              name={newPasswordRepeat.name}
              id={newPasswordRepeat.id}
              placeholder={newPasswordRepeat.placeholder}
              type={newRepeatType}
              autoComplete="off"
            />
            <ShowPassword type={newRepeatType} setType={setNewRepeaType} />
          </div>
          <ErrorMessage name={newPasswordRepeat.name} component={Error} />
        </div>
        <Button
          classType="basic"
          type="submit"
          text="Accept"
          additionalClass={styles.button}
        />
      </Form>
    </Formik>
  );
};

export default EditPasswordForm;

EditPasswordForm.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};
