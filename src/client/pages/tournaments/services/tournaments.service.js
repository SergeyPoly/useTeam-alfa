import BaseHttpService from '../../../../services/base-http.service';

export default class TournamentsService extends BaseHttpService {
    async getAllTournaments(queryProperties) {
        const properties = queryProperties.join('&');
        const endpoint = `tournaments?${properties}`;
        const response = await this.get(endpoint);
        return response;
    }

};

