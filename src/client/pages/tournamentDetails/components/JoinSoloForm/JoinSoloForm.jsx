import React from 'react';
import { Form, Formik } from 'formik';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fields } from './fields'
import Button from '../../../../../shared/components/Button';

import styles from './JoinSoloForm.module.scss';
import CustomRadioField from './CustomRadioField/CustomRadioField';
import {
    setJoinOption, setTournamentOwnerTeam, setTournamentSoloTeam,
    toggleJoinSoloStatus, toggleJoinTeamStatus,
} from '../../reducers/tournamentDetailsReducer';
import { randomPlayersData } from '../../randomPlayersData';
import { randomPlayersRequestCreator } from '../../reducers/tournamentDetailsActionCreators'; //logic rethink needed after back-end fully operational

const JoinSoloForm = ({disabled}) => {
    const dispatch = useDispatch();
    const {id, avatarImg} = useSelector(({auth}) => auth.user, shallowEqual);
    const joinOption = useSelector(({tournamentDetails}) => tournamentDetails.joinOption, shallowEqual);
    const tournamentSoloTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentSoloTeam, shallowEqual);
    const initialValues = {
        joinAs: joinOption,
    };
    const additionalClass = disabled ? styles.join_button_disabled : styles.join_button;

    const handleResponse = (newRandomTeam) => setTournamentSoloTeam(newRandomTeam);

    const onSubmit = ({joinAs}) => {
        dispatch(setJoinOption(joinAs));
        const currentPlayer = {
            id: id,
            avatarImg: avatarImg,
            role: joinAs
        };
        const randomTournamentTeam = [...tournamentSoloTeam];
        randomTournamentTeam.push(currentPlayer);
        dispatch(randomPlayersRequestCreator(4, randomTournamentTeam, handleResponse));
        dispatch(toggleJoinSoloStatus('joined'));
        dispatch(toggleJoinTeamStatus('disabled'));
        dispatch(setTournamentOwnerTeam([]))
    };

    const formProps = {
        initialValues,
        onSubmit,
    };

    return (
        <Formik {...formProps} enableReinitialize>
            <Form>
                <div style={{marginBottom: '35px'}}>
                    <CustomRadioField {...fields.joinSoloOption1}/>
                    <CustomRadioField {...fields.joinSoloOption2}/>
                </div>
                <Button
                    text='JOIN'
                    type='submit'
                    classType='basic'
                    additionalClass={additionalClass}
                    disabled={disabled}/>
            </Form>
        </Formik>
    );
};

export default JoinSoloForm;
