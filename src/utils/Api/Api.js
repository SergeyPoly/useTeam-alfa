import axios from 'axios';

 const getData = url => {
	return axios.get(url).then((resp) => {
		const allPersons = resp.data.result;
		return allPersons
	  })
	}

export default getData;