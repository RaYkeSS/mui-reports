import {API_ENDPOINTS} from "../apiEndpoints.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchResetPassword = async (email, newPassword) => {

    const url = `${BASE_URL}${API_ENDPOINTS.users}`;

        const response = await fetch(`${url}?email=${email}`);
        const data = await response.json();

        if (data.length <= 0) {
            throw new Error("Пользователь не найден")
        }

        const user = data[0];

        const updatedUser = {...user, password: newPassword};
        await fetch(`${url}/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        });

}
