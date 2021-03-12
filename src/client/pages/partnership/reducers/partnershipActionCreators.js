import PartnershipService from '../service/partnership.service';

import { setLoadingStatus } from '../../../../app/store/apiReducer';
import { setNewPartner } from './partnerReducer';

const partnershipService = new PartnershipService();

export const partnersDataRequestCreator = () => {
    return async ( dispatch ) => {
        dispatch(setLoadingStatus(true));
        try {
            await partnershipService.getPartnerData()
                .then((res) => {
                    const {_id, partnersData} = res.result[0];
                    dispatch(setNewPartner({
                        partnersData: partnersData,
                        id: _id
                    }));
                    dispatch(setLoadingStatus(false));
                })
        } catch (err) {
            console.log(err);
            dispatch(setLoadingStatus(false));
        }
    }
};

export const changeDataRequestCreator = (id, body) => {
    return async ( dispatch ) => {
        dispatch(setLoadingStatus(true));
        try {
            await partnershipService.changePartnerData(id, body)
                .then((res) => {
                    const {_id, partnersData} = res.result[0];
                    dispatch(setNewPartner({
                        partnersData: partnersData,
                        id: _id
                    }));
                    dispatch(setLoadingStatus(false));
                })
        } catch (err) {
            console.log(err);
            dispatch(setLoadingStatus(false));
        }
    }
};


