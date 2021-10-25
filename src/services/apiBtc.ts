import axios from 'axios';

const apiBtc = axios.create({
    baseURL: 'http://localhost:3001'
});

export const apiCotation = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/simple'
});

export default apiBtc;