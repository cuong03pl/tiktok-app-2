import axios from 'axios';
// users/search?q=hoaa&type=less
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, params) => {
    const res = await request.get(url, params);

    return res.data;
};
export default request;
