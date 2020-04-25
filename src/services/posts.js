import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getPosts = async () => axiosInstance.get('posts');