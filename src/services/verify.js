import axios from 'axios';
import settings from './settings';

export async function VerifyUser(userData) {
    try { 
        const response = await axios.post(`${settings.local}/user/verify`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error en VerifyUser:", error);
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error || 'Ocurrió un error en la verificación');
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}
