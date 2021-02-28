import React from 'react';
import { Form, Formik } from 'formik';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Heading from '../../../../shared/components/Heading';
import {fields} from './fields'
import CustomFormikField from '../../../../shared/components/FormikFields/CustomFormikField';
import Button from '../../../../shared/components/Button';
import { setFilterOptions } from '../../reducers/tournamentsReducer';

import styles from './SidebarContentFilters.module.scss';

const SidebarContentFilters = () => {
    const dispatch = useDispatch();
    const filterOptions = useSelector(({tournaments}) => tournaments.filterOptions, shallowEqual);
    const initialValues = {...filterOptions};

    const onSubmit = (values) => {
        dispatch(setFilterOptions(values));
    };

    const formProps = {
        initialValues,
        onSubmit,
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div>
                    <Heading type='block' text='Prize pool' additionalClass={styles.filters__heading}/>
                    <div className={styles.filters__double_group}>
                        <CustomFormikField {...fields.prizePool1}/>
                        <CustomFormikField {...fields.prizePool2}/>
                    </div>
                    <Heading type='block' text='Server' additionalClass={styles.filters__heading}/>
                    <div className={styles.filters__quadruple_group}>
                        <CustomFormikField {...fields.server1}/>
                        <CustomFormikField {...fields.server2}/>
                        <CustomFormikField {...fields.server3}/>
                        <CustomFormikField {...fields.server4}/>
                    </div>
                    <Heading type='block' text='Mode' additionalClass={styles.filters__heading}/>
                    <div className={styles.filters__double_group}>
                        <CustomFormikField {...fields.mode1}/>
                        <CustomFormikField {...fields.mode2}/>
                    </div>
                    <Heading type='block' text='Slots' additionalClass={styles.filters__heading}/>
                    <div className={styles.filters__double_group}>
                        <CustomFormikField {...fields.slots1}/>
                        <CustomFormikField {...fields.slots3}/>
                        <CustomFormikField {...fields.slots2}/>
                        <CustomFormikField {...fields.slots4}/>
                    </div>
                </div>
                <Button text='ACCEPT' type='submit' classType='basic' additionalClass={styles.filters__submit}/>
            </Form>
        </Formik>
    );
};

export default SidebarContentFilters;
