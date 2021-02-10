import React from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import styles from './EditNameForm.module.scss';
import validationSchema from './validationSchema';
import Error from '../Error/Error';
import Button from '../../../../shared/components/Button';

const EditNameForm = props => {
  const { name, setName } = props;

  const initialValues = {
    name,
  };
  const onSubmit = values => {
    setName(values.name);
    alert(`Editing success! New name is ${values.name}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <FastField
            name="name"
            id="name"
            placeholder="Enter yor name"
            autoComplete="off"
          />
          <ErrorMessage name="name" component={Error} />
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

export default EditNameForm;

EditNameForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};
