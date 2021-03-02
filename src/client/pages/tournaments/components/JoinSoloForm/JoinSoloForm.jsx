import React from 'react';
import { Form, Formik } from 'formik';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {fields} from './fields'
import Button from '../../../../../shared/components/Button';

import styles from './JoinSoloForm.module.scss';
import CustomRadioField from './CustomRadioField/CustomRadioField';
import {
    setJoinOption, setTournamentTeam,
    toggleJoinSoloStatus,
} from '../../reducers/tournamentDetailsReducer';
import { randomPlayersData } from '../../randomPlayersData'; //logic rethink needed after back-end fully operational

const JoinSoloForm = () => {
    const dispatch = useDispatch();
    const {id, smallAvatarImg} = useSelector(({auth}) => auth.userData, shallowEqual);
    const joinOption = useSelector(({tournamentDetails}) => tournamentDetails.joinOption, shallowEqual);
    const tournamentTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentTeam, shallowEqual);
    const initialValues = {
        joinAs: joinOption,
    };

    const onSubmit = ({joinAs}) => {
        dispatch(setJoinOption(joinAs));
        const currentPlayer = {
            id: id,
            smallAvatarImg: smallAvatarImg,
            role: joinAs
        };
        const randomTournamentTeam = [...tournamentTeam];
        const randomPlayers = [...randomPlayersData];
        const randomIndex = () => Math.floor(Math.random()*(randomPlayers.length));
        randomTournamentTeam.push(currentPlayer);
        do {
            randomTournamentTeam.push(randomPlayers.splice(randomIndex(), 1)[0]);
        } while (randomTournamentTeam.length < 5);
        dispatch(setTournamentTeam(randomTournamentTeam));
        dispatch(toggleJoinSoloStatus('joined'))
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
