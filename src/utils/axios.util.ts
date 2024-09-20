import axios from "axios";
import Cookies from 'js-cookie';

const instance = axios.create({
  timeout: 10000,
});

instance.interceptors.request.use(config => {
    // You can add headers or any thing here.
    // config.headers['Authorization'] = 'Bearer token';
    config.headers['Content-type'] = 'application/json; charset=UTF-8';
    const token: string | undefined = Cookies.get('authToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }, error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    if (response?.data?.token) {
      const option = { expires: 30 / 1440 } // expire in thirty minutes
      Cookies.set('authToken', response.data.token, option);
    }
    return response;
  },
  error => {
      return Promise.reject(error);
  }
);

export interface AxiosConfig {
  headers: object;
}

export async function axiosPost<T>(url: string, payload: string, config?: AxiosConfig): Promise<T> {
  try {
    const axiosResult = await instance.post<T>(url, payload, config);

    return axiosResult.data;
  } catch (error: any) {
    throw Error(error.message)
  }
}

export async function axiosGet<T>(url: string): Promise<T> {
  try {
    const axiosResult = await instance.get<T>(url);

    return axiosResult.data;
  } catch (error: any) {
    throw Error(error.message)
  }
}
