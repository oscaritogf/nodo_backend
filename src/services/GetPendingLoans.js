import axios from 'axios';
import settings from './settings';

export async function GetPendingLoans() {
    try {
        const response = await axios.get(`${settings.local}/loanRequest/obtener-solicitud-pendientes`);

        // Verificar que la respuesta tiene datos
        if (response?.data) {
            return response.data; // Retornar directamente los datos
        } else {
            throw new Error('La respuesta del servidor no contiene datos.');
        }
    } catch (error) {
        console.error('Error en GetPendingLoans:', error);

        if (error.response) {
            // Error en la respuesta del servidor
            const errorMessage = error.response.data?.error || 'Error al obtener las solicitudes pendientes.';
            throw new Error(`Error ${error.response.status}: ${errorMessage}`);
        } else if (error.request) {
            // Error relacionado con la solicitud (por ejemplo, el servidor no responde)
            throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
        } else {
            // Otros errores (por ejemplo, configuración o excepciones desconocidas)
            throw new Error('Se produjo un error inesperado.');
        }
    }
}
