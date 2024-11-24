import axios from 'axios';
import settings from './settings';

export async function RegisterUser(userData) {
    try { 
        const response = await axios.post(`${settings.local}/user/register`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error en RegisterUser:", error);
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error || 'Ocurrió un error');
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}
