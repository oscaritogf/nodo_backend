
//src/services/registre
import settings from "./settings";

export async function RegisterUser(userData) {
    try {

        const response = await fetch(`${ settings.domain }/registro-usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${errorData.error || 'Ocurrió un error'}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en RegisterUser:", error);
        throw error;  
    }
}
