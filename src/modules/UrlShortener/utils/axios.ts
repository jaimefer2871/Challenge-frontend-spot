import axios from 'axios';

const urlEnv = process.env.REACT_APP_URL_BACKEND;

const axiosInt = axios.create({
    baseURL: `${urlEnv}/api/v1/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Expose-Headers": "authorization",
        "Access-Control-Allow-Headers": "*"
    }
});

axiosInt.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ERR_NETWORK' ) {
            console.error('AxiosInterceptorError', error.message);
        }

        return Promise.reject(error);
    }

);

export default axiosInt;