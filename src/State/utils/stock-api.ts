import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_STOCK_API_URL,
  params: {
    apiKey: process.env.REACT_APP_STOCK_API_KEY,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError = { message: 'myError', code: 404, ...error };
    return Promise.reject(customError);
  }
);

export default instance;
