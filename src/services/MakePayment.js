import axios from 'axios';
import settings from './settings';

export async function MakePayment(paymentData) {
    try {
        const response = await axios.post(`${settings.local}/loanRequest/realizar-pago`, paymentData, {
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
        console.error("Error en MakePayment:", error);

        if (error.response) {
            const errorMessage = error.response.data?.error || 'Ocurrió un error al realizar el pago';
            throw new Error(`Error: ${error.response.status} - ${errorMessage}`);
        } else {
            throw new Error('Error al conectar con el servidor.');
        }
    }
}
