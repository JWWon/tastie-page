import axios from 'axios';

function config() {
	axios.defaults.baseURL = process.env.API_URL;
}

export default { config };
