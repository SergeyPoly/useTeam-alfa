import axios from 'axios';

export const getTournamentsData = async () => {
	return axios.get('/api/customers/customer', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};