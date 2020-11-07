import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_STOCK_API_URL,
  params: {
    apikey: process.env.REACT_APP_STOCK_API_KEY,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject({
      message: error?.response?.statusText ?? 'Internal Server Error',
      code: error?.response?.status ?? 500,
    });
  }
);

export default instance;
