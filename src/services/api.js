import axios from 'axios';

const accessToken =
  'BQA_C_2E64pge3TuG4Rs0W62Dr34iNnBUDpI-zJpodBHJL703RS-TbgsvFjQcUXS7847bffCyTXrobHF8_jgVQGEUEeqtbXEpcK4dKOarbY_KuRRzUWy9AYaWFrs9r82aoO9i_q2yFWRHsQV';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${accessToken}`,
};

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers,
});

export default api;
