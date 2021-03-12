import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Heading from '../../../../shared/components/Heading';
import {fields} from './fields'
import CustomFormikField from '../../../../shared/components/FormikFields/CustomFormikField';
import Button from '../../../../shared/components/Button';
import {
    toggleAuthModalStatus,
    toggleAuthStatus,
} from '../../reducer/authReducer';
import { userDataRequestCreator } from '../../reducer/authActionCreators';

import styles from './AuthImitator.module.scss';

const AuthImitator = () => {
    const dispatch = useDispatch();
    const initialValues = {
        user: '604a903fc7c9c314782e04e5'
    };

    const onSubmit = (values) => {
        dispatch(userDataRequestCreator(values.user))
        dispatch(toggleAuthModalStatus());
        dispatch(toggleAuthStatus());
    };

    const formProps = {
        initialValues,
        onSubmit,
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div>
                    <Heading
                        type='block'
                        text='Choose user'
                        additionalClass={styles.heading}/>
                        <div style={{textAlign: 'center'}}>
                            <CustomFormikField {...fields.user1} additionalContainerClass={styles.radio_container}/>
                            <CustomFormikField {...fields.user2} additionalContainerClass={styles.radio_container}/>
                            <CustomFormikField {...fields.user3} />
                            <Button
                                text='LOGIN'
                                type='submit'
                                classType='basic'
                                additionalClass={styles.login_btn}/>
                        </div>
                </div>
            </Form>
        </Formik>
    );
};

export default AuthImitator;
