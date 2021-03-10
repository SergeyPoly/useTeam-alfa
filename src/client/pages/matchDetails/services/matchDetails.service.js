import BaseHttpService from '../../../../services/base-http.service';

export default class MatchDetailsService extends BaseHttpService {
    async getCurrentMatch(id) {
        const endpoint = `matches/${id}`;
        const response = await this.get(endpoint);
        return response;
    }
};

