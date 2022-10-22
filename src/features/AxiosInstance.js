import axios from 'axios';

export let axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getToken = () => {
  return {
    headers: {
      Authorization: `bearer ${localStorage.getItem('access_token')}`,
    },
  };
};
