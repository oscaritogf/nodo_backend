import axios from 'axios';
import settings from './settings';

export async function CreateLoanRequest(loanData) {
    try {
        const response = await axios.post(`${settings.local}/loanRequest/crear-solicitud`, loanData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verificación de que la respuesta contiene datos
        if (response.data) {
            return response.data;
        } else {
            throw new Error('La respuesta del servidor no contiene datos.');
        }
    } catch (error) {
        console.error("Error en CreateLoanRequest:", error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'SI sIS Ocurrió un error al crear la solicitud de préstamo';
            throw new Error(`Error: ${error.response.status} - ${errorMessage}`);
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}
