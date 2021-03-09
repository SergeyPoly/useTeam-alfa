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
import { randomPlayersData } from '../../randomPlayersData'; //logic rethink needed after back-end fully operational

const JoinSoloForm = ({disabled}) => {
    const dispatch = useDispatch();
    const {id, smallAvatarImg} = useSelector(({auth}) => auth.userData, shallowEqual);
    const joinOption = useSelector(({tournamentDetails}) => tournamentDetails.joinOption, shallowEqual);
    const tournamentSoloTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentSoloTeam, shallowEqual);
    const initialValues = {
        joinAs: joinOption,
    };
    const additionalClass = disabled ? styles.join_button_disabled : styles.join_button;

    const onSubmit = ({joinAs}) => {
        dispatch(setJoinOption(joinAs));
        const currentPlayer = {
            id: id,
            smallAvatarImg: smallAvatarImg,
            role: joinAs
        };
        const randomTournamentTeam = [...tournamentSoloTeam];
        const randomPlayers = [...randomPlayersData];
        const randomIndex = () => Math.floor(Math.random()*(randomPlayers.length));
        randomTournamentTeam.push(currentPlayer);
        do {
            randomTournamentTeam.push(randomPlayers.splice(randomIndex(), 1)[0]);
        } while (randomTournamentTeam.length < 5);
        dispatch(setTournamentSoloTeam(randomTournamentTeam));
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
