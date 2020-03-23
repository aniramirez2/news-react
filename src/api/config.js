import axios from 'axios';

export const api = axios.create({
    baseURL: "http://newsapi.org/v2"
});

export const API_KEY = "1214dd3da9fc4881b5e81e866119fc1d";