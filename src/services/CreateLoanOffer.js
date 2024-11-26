import axios from 'axios';

export async function CreateLoanOffer(offerData) {
    try {
        const response = await axios.post('http://localhost:8000/api/loanOffer/crear-oferta', offerData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verificar si la respuesta es exitosa
        if (response?.data?.success) {
            return response.data; // Retornar los datos de la respuesta
        } else {
            throw new Error('No se pudo crear la oferta. La respuesta no fue exitosa.');
        }
    } catch (error) {
        console.error('Error en CreateLoanOffer:', error);

        if (error.response) {
            // Error en la respuesta del servidor
            const errorMessage = error.response.data?.error || 'Error al crear la oferta.';
            throw new Error(`Error ${error.response.status}: ${errorMessage}`);
        } else if (error.request) {
            // Error relacionado con la solicitud (por ejemplo, el servidor no responde)
            throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
        } else {
            // Otros errores (por ejemplo, configuración o excepciones desconocidas)
            throw new Error('Se produjo un error inesperado al crear la oferta.');
        }
    }
}
