import BaseHttpService from '../../../../services/base-http.service';

export default class PartnershipService extends BaseHttpService {
    async getPartnerData() {
        const endpoint = `partners`;
        const response = await this.get(endpoint);
        return response;
    }

    async changePartnerData(id, body) {
        const endpoint = `partners/${id}`;
        const response = await this.put(endpoint, body);
        return response;
    }
};

