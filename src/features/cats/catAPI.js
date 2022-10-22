import { axiosInstance, getToken } from '../AxiosInstance';

export function getCats() {
  return axiosInstance.get('/test/cats?age=10', getToken());
}
export function postCats(parameters) {
  return axiosInstance.post('/test/cats', parameters, getToken());
}
