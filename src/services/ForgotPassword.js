import axios from 'axios';
import settings from './settings';

export async function ForgotPassword(userData) {
    try { 
        const response = await axios.post(`${settings.local}/user/forgot-password`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error en ForgotPassword:", error);
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error || 'Ocurrió un error al enviar la solicitud de cambio de contraseña');
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}
