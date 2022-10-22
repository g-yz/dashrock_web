import { axiosInstance, getToken } from '../AxiosInstance';
import axios from 'axios';

export function login(credentials) {
  return axios({
    method: 'post',
    url: process.env.REACT_APP_BASE_URL + '/login/access-token',
    data: credentials,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export function verify() {
  return axiosInstance.get('/users/me', getToken());
}
