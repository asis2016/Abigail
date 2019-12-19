import axios from 'axios';
import {APICollection} from "./config";

export const axiosInstance = axios.create({
    baseURL: APICollection.apiProduct
});