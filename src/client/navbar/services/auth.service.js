import BaseHttpService from '../../../services/base-http.service';

export default class AuthService extends BaseHttpService {
    async getUserData(id) {
        const endpoint = `testUsers/${id}`;
        const response = await this.get(endpoint);
        return response;
    }

    async inviteTeammateData(id, body) {
        const endpoint = `testUsers/${id}`;
        const response = await this.put(endpoint, body);
        return response;
    }
};

