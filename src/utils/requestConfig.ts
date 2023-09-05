import axios from "axios";

export const dogApi = axios.create({
    baseURL: "https://dog.ceo/api",
});

export const backendApi = axios.create({
    baseURL: "https://c7-b4-dog-breeds-server.onrender.com",
});
