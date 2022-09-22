import axios from "axios";


const axiosClient = axios.create({
    baseURL: process.env.baseUrl
});

axiosClient.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
    return config;
}
)

axiosClient.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            error.response && error.response.data
        )
);
export default axiosClient;