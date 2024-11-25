import axios from 'axios';

export async function GetPendingLoansByUserId(userId) {
    try {
        const response = await axios.get(`http://localhost:8000/api/loanRequest/obtener-solicitud-pendientes/${userId}`);

        // Verificar que la respuesta contiene datos
        if (response?.data) {
            return response.data; // Retornar los datos obtenidos
        } else {
            throw new Error('La respuesta del servidor no contiene datos.');
        }
    } catch (error) {
        console.error('Error en GetPendingLoansByUserId:', error);

        if (error.response) {
            // Error en la respuesta del servidor
            const errorMessage = error.response.data?.error || 'Error al obtener las solicitudes pendientes por usuario.';
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
