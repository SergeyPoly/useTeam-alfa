import PartnershipService from '../service/partnership.service';

import { setNewPartner } from './partnerReducer';

const partnershipService = new PartnershipService();

export const partnersDataRequestCreator = () => {
    return async ( dispatch ) => {
        try {
            await partnershipService.getPartnerData()
                .then((res) => {
                    const {_id, partnersData} = res.result[0];
                    dispatch(setNewPartner({
                        partnersData: partnersData,
                        id: _id
                    }));
                })
        } catch (err) {
            console.log(err);
        }
    }
};

export const changeDataRequestCreator = (id, body) => {
    return async ( dispatch ) => {
        try {
            await partnershipService.changePartnerData(id, body)
                .then((res) => {
                    const {_id, partnersData} = res.result[0];
                    dispatch(setNewPartner({
                        partnersData: partnersData,
                        id: _id
                    }));
                })
        } catch (err) {
            console.log(err);
        }
    }
};


