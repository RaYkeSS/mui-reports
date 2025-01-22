import {API_ENDPOINTS} from "../apiEndpoints.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchLogin = async (email, password) => {

    const url = `${BASE_URL}${API_ENDPOINTS.users}?email=${email}&password=${password}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error)
    }
}