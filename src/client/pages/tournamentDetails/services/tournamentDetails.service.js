import BaseHttpService from '../../../../services/base-http.service';

export default class TournamentDetailsService extends BaseHttpService {
    async getCurrentTournament(id) {
        const endpoint = `tournaments/${id}`;
        const response = await this.get(endpoint);
        return response;
    }

    async getRandomPlayers(amount) {
        const endpoint = `players?${amount}`;
        const response = await this.get(endpoint);
        return response;
    }
};

