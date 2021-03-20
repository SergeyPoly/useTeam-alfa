import AuthService from '../services/auth.service';
import { setTeamData, setUserData } from './authReducer';

import { teamData } from '../../pages/team/teamData'; //DELETE! after back-end fully operational!
import { usersData } from '../../pages/tournamentDetails/usersData';
// import { setNewPartner } from '../../pages/partnership/reducers/partnerReducer'; //DELETE! after back-end fully operational!

const authService = new AuthService();

export const userDataRequestCreator = (id) => {
    return async ( dispatch ) => {
        try {
            await authService.getUserData(id)
                .then((res) => {
                    dispatch(setUserData(res.result));
                    //REFACTOR NEXT STEPS after back-end fully operational!
                    const responseTeamData = {
                        ...teamData,
                        teammates: teamData.teammates.map(element => usersData.find(({id}) => id === element))
                    };
                    dispatch(setTeamData(responseTeamData));
                })
        } catch (err) {
            console.log(err);
        }
    }
};

export const inviteTeammateRequestCreator = (id, body) => {
    return async ( dispatch ) => {
        try {
            await authService.inviteTeammateData(id, body)
                .then((res) => {
                    console.log(res.data.result);
                })
        } catch (err) {
            console.log(err);
        }
    }
};

export const acceptInviteRequestCreator = (id, body) => {
    return async ( dispatch ) => {
        try {
            await authService.inviteTeammateData(id, body)
                .then((res) => {
                    dispatch(setUserData(res.data.result));
                    //REFACTOR NEXT STEPS after back-end fully operational!
                    const responseTeamData = {
                        ...teamData,
                        teammates: teamData.teammates.map(element => usersData.find(({id}) => id === element))
                    };
                    dispatch(setTeamData(responseTeamData));
                })
        } catch (err) {
            console.log(err);
        }
    }
};


