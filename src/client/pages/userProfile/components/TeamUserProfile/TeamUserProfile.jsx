import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeamUserProfil.module.scss';
import teamAvatar from '../../../../../assets/images/userProfile/team-avatar.jpg';
import { ReactComponent as ChargeIco } from '../../../../../assets/images/userProfile/ico/charge.svg';
import Button from '../../../../../shared/components/Button';
import { shallowEqual, useSelector } from 'react-redux';
import Heading from '../../../../../shared/components/Heading';



const TeamUserProfile = () => {
    const team = useSelector(state => state.auth.team, shallowEqual);
    // const teamItem = (Object.keys(team).length === 0) ? <></> :


    const {avatar, name, date} = team;


    return (
        <>
            <Heading type={"block"} text={"Team"}/>
                     <div>dfsg</div>
        </>
    )
}

export default TeamUserProfile;

{/*TeamUserProfile.propTypes = {*/}
{/*  team: PropTypes.bool,*/}
{/*  teamProps: PropTypes.objectOf(PropTypes.string),*/}
{/*    openPopup: PropTypes.func,*/}
{/*    openChoosePopup: PropTypes.func,*/}
{/*};*/}

{/*TeamUserProfile.defaultProps = {*/}
{/*  team: false,*/}
{/*  teamProps: {},*/}
{/*    openPopup: () => {},*/}
{/*    openChoosePopup: () => {},*/}
{/*};*/}
