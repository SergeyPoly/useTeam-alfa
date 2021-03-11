import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Heading from '../../../../shared/components/Heading';
import {fields} from './fields'
import CustomFormikField from '../../../../shared/components/FormikFields/CustomFormikField';
import Button from '../../../../shared/components/Button';

import styles from './AuthImitator.module.scss';
import {
    setTeamData,
    setUserData, toggleAuthModalStatus,
    toggleAuthStatus,
} from '../../reducer/authReducer';

import { userProfileData } from '../../../pages/user/pages/userProfileData'; //DELETE! after back-end fully operational!
import { teamData } from '../../../pages/team/teamData'; //DELETE! after back-end fully operational!
import { usersData } from '../../../pages/tournamentDetails/usersData'; //DELETE! after back-end fully operational!

const AuthImitator = () => {
    const dispatch = useDispatch();
    const initialValues = {
        user: '1'
    };

    const onSubmit = (values) => {
        console.log(values);
        //REFACTOR NEXT STEPS after back-end fully operational!
        dispatch(setUserData(userProfileData));
        const responseTeamData = {
            ...teamData,
            teammates: teamData.teammates.map(element => usersData.find(({id}) => id === element))
        };
        dispatch(setTeamData(responseTeamData));
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
