import axios from 'axios';
import settings from './settings';

export async function CreateLoanInstallments(loanData) {
    try {
        const response = await axios.post('http://localhost:8000/api/loanRequest/crear-cuotas', loanData, {
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
        console.error("Error en CreateLoanInstallments:", error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'Ocurrió un error al crear las cuotas del préstamo';
            throw new Error(`Error: ${error.response.status} - ${errorMessage}`);
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}




