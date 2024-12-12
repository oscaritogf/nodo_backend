import axios from 'axios';
import settings from './settings';

export async function GetLoanRequestByLender(lenderId) {
    try {
        const response = await axios.get(`${settings.local}/loanRequest/obtener-solicitud-prestamista/${lenderId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data) {
            return response.data;
        } else {
            throw new Error('La respuesta del servidor no contiene datos.');
        }
    } catch (error) {
        console.error("Error en GetLoanRequestByLender:", error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'Ocurrió un error al obtener la solicitud del prestamista';
            throw new Error(`Error: ${error.response.status} - ${errorMessage}`);
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}
