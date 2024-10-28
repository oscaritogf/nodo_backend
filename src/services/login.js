import axios from 'axios';
import settings from './settings';

export async function LoginUser(userLogin) {
    try {
        const response = await axios.post(`${settings.domain}/user/login`, userLogin, {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        });

        return response.data; 
    } catch (error) {
        console.error("Error en LoginUser:", error);

        if (error.response && error.response.data) {
            throw new Error(`Error: ${error.response.status} - ${error.response.data.detail || 'Ocurrió un error'}`);
        } else {

            throw new Error('Error al conectar con el servidor.');
        }
    }
}
