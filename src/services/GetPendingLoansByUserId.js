import axios from 'axios';

export async function GetPendingLoansByUserId(userId) {
    try {
        const response = await axios.get(`${settings.local}/loanRequest/obtener-solicitud-pendientes/${userId}`);

        if (response?.data) {
            return response.data; 
        } else {
            throw new Error('La respuesta del servidor no contiene datos.');
        }
    } catch (error) {
        console.error('Error en GetPendingLoansByUserId:', error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'Error al obtener las solicitudes pendientes por usuario.';
            throw new Error(`Error ${error.response.status}: ${errorMessage}`);
        } else if (error.request) {
            throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
        } else {
            throw new Error('Se produjo un error inesperado.');
        }
    }
}
