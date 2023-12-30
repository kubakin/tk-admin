import axios from 'axios';

export const userAdminApiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/admin/user`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
    // headers: {"Access-Control-Allow-Origin": "*"}
});
