import axios from 'axios';

export const gameInstanceAdminApiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/admin/game-instance`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
    // headers: {"Access-Control-Allow-Origin": "*"}
});
