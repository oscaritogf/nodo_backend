import axios from 'axios';
import settings from './settings';

export async function CreateLoanOffer(offerData) {
    try {
        const response = await axios.post(`${settings.local}/loanOffer/crear-oferta`, offerData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

     
        if (response?.data?.success) {
            return response.data; 
        } else {
            throw new Error('No se pudo crear la oferta. La respuesta no fue exitosa.');
        }
    } catch (error) {
        console.error('Error en CreateLoanOffer:', error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'Error al crear la oferta.';
            throw new Error(`Error ${error.response.status}: ${errorMessage}`);
        } else if (error.request) {
            throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
        } else {
            throw new Error('Se produjo un error inesperado al crear la oferta.');
        }
    }
}
