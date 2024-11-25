import axios from 'axios';

export async function FetchLoanDetails(solicitudId) {
    try {
        const response = await axios.get(`http://localhost:8000/api/loanRequest/obtener-solicitud/${solicitudId}`);

        // Verificar que la respuesta contiene datos y éxito
        if (response?.data?.success && response.data?.data) {
            return response.data.data; // Retornar solo los datos relevantes
        } else {
            throw new Error('La respuesta del servidor no contiene datos válidos.');
        }
    } catch (error) {
        console.error('Error en FetchLoanDetails:', error);

        if (error.response) {
            // Error en la respuesta del servidor
            const errorMessage = error.response.data?.error || 'Error al obtener los detalles de la solicitud.';
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
