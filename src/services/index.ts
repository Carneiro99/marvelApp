import axios from 'axios';
import marvelapi from '../constants/api';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

api.interceptors.request.use((apiParams) => {
  apiParams.params = apiParams.params || {};
  apiParams.params.apikey = marvelapi.apyKey;
  apiParams.params.hash = marvelapi.md5;
  apiParams.params.ts = marvelapi.timestamp;
  console.log(apiParams);

  return apiParams;
});

export default api;
