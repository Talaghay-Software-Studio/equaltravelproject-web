import axios from "axios";

const BASE_URL = "http://ec2-3-135-237-241.us-east-2.compute.amazonaws.com:8000";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});