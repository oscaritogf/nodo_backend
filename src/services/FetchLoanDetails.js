import axios from 'axios';
import settings from './settings';
export async function FetchLoanDetails(solicitudId) {
    try {
        const response = await axios.get(`${settings.local}/loanRequest/obtener-solicitud/${solicitudId}`);

        if (response?.data?.success && response.data?.data) {
            return response.data.data;
        } else {
            throw new Error('La respuesta del servidor no contiene datos válidos.');
        }
    } catch (error) {
        console.error('Error en FetchLoanDetails:', error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'Error al obtener los detalles de la solicitud.';
            throw new Error(`Error ${error.response.status}: ${errorMessage}`);
        } else if (error.request) {
            throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
        } else {
            throw new Error('Se produjo un error inesperado.');
        }
    }
}
