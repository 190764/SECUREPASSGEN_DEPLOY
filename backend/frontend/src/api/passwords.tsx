import axios from 'axios';

export const api = axios.create({
  baseURL: `${window.location.origin}/password-api`,
});
