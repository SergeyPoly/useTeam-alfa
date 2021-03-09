import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import {fields} from './fields'
import Button from '../../../../../shared/components/Button';

import styles from './JoinSoloForm.module.scss';
import CustomRadioField from './CustomRadioField/CustomRadioField';
import { changeJoinStatus } from '../../reducers/tournamentDetailsReducer';

const JoinSoloForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        joinAs: fields.joinSoloOption1.value,
    };

    const onSubmit = (values) => {
        console.log(values);
        dispatch(changeJoinStatus('joined'))
    };

    const formProps = {
        initialValues,
        onSubmit,
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div style={{marginBottom: '15px'}}>
                    <CustomRadioField {...fields.joinSoloOption1}/>
                    <CustomRadioField {...fields.joinSoloOption2}/>
                </div>
                <Button text='JOIN' type='submit' classType='basic' additionalClass={styles.join_button}/>
            </Form>
        </Formik>
    );
};

export default JoinSoloForm;
