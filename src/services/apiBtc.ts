import axios from 'axios';

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl
const apiBtc = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
});

export default apiBtc;