import { axiosInstance, getToken } from '../AxiosInstance';

export function getPandas() {
  return axiosInstance.get('/panda/pandas?age=12', getToken());
}
export function postPandas(parameters) {
  return axiosInstance.post('/panda/pandas', parameters, getToken());
}
